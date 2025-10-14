/**
 * Assessment API Service
 * Handles all API calls to the Kindred ROI Assessment backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

/**
 * Submit a new assessment
 * @param {Object} data - Assessment form data
 * @returns {Promise<Object>} Assessment results with ID
 */
export const submitAssessment = async (data) => {
  try {
    console.log('Submitting assessment data:', data)
    console.log('API URL:', `${API_BASE_URL}/api/public/assessment`)

    const response = await fetch(`${API_BASE_URL}/api/public/assessment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (!result.status) {
      throw new Error(result.message || 'Assessment submission failed')
    }

    return result.data
  } catch (error) {
    console.error('Assessment submission error:', error)
    throw new Error(error.message || 'Failed to submit assessment. Please try again.')
  }
}

/**
 * Retrieve assessment results by ID
 * @param {String} assessmentId - UUID of the assessment
 * @returns {Promise<Object>} Assessment results
 */
export const getAssessmentResults = async (assessmentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/public/assessment/${assessmentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Assessment not found. The link may be invalid or expired.')
      }
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (!result.status) {
      throw new Error(result.message || 'Failed to retrieve assessment results')
    }

    return result.data
  } catch (error) {
    console.error('Assessment retrieval error:', error)
    throw error
  }
}

/**
 * Validate assessment form data before submission
 * @param {Object} data - Form data to validate
 * @returns {Object} Validation result with isValid and errors
 */
export const validateAssessmentData = (data) => {
  const errors = []

  // Required fields
  if (!data.email || !data.email.includes('@')) {
    errors.push('Valid email is required')
  }
  if (!data.role) {
    errors.push('Role is required')
  }
  if (!data.total_contacts || data.total_contacts <= 0) {
    errors.push('Total contacts must be greater than 0')
  }
  if (data.active_maintained === undefined || data.active_maintained < 0) {
    errors.push('Active maintained contacts is required')
  }
  if (data.avg_deal_value === undefined || data.avg_deal_value < 0) {
    errors.push('Average deal value is required')
  }
  if (data.relationship_percent === undefined || data.relationship_percent < 0 || data.relationship_percent > 100) {
    errors.push('Relationship percentage must be between 0 and 100')
  }
  if (!data.last_outreach) {
    errors.push('Last outreach timing is required')
  }
  if (data.lost_contacts === undefined || data.lost_contacts < 0) {
    errors.push('Lost contacts is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
