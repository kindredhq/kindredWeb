/**
 * Utility functions for formatting numbers, currency, and dates
 */

/**
 * Format number as US currency
 * @param {Number} amount - Dollar amount
 * @param {Boolean} compact - Use compact notation (e.g., $1.2M)
 * @returns {String} Formatted currency string
 */
export const formatCurrency = (amount, compact = false) => {
  if (amount === null || amount === undefined) return '$0'

  if (compact) {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Format number with thousands separators
 * @param {Number} num - Number to format
 * @returns {String} Formatted number string
 */
export const formatNumber = (num) => {
  if (num === null || num === undefined) return '0'

  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Format percentage
 * @param {Number} percent - Percentage value (0-100)
 * @returns {String} Formatted percentage string
 */
export const formatPercent = (percent) => {
  if (percent === null || percent === undefined) return '0%'

  return `${Math.round(percent)}%`
}

/**
 * Get health level color class based on score
 * @param {Number} score - Health score (0-100)
 * @returns {String} Tailwind color class
 */
export const getHealthScoreColor = (score) => {
  if (score >= 90) return 'text-green-600'
  if (score >= 70) return 'text-blue-600'
  if (score >= 50) return 'text-yellow-600'
  if (score >= 30) return 'text-orange-600'
  return 'text-red-600'
}

/**
 * Get health level background color class based on score
 * @param {Number} score - Health score (0-100)
 * @returns {String} Tailwind background color class
 */
export const getHealthScoreBgColor = (score) => {
  if (score >= 90) return 'bg-green-100 border-green-300'
  if (score >= 70) return 'bg-blue-100 border-blue-300'
  if (score >= 50) return 'bg-yellow-100 border-yellow-300'
  if (score >= 30) return 'bg-orange-100 border-orange-300'
  return 'bg-red-100 border-red-300'
}

/**
 * Get percentile text based on health score
 * @param {Number} score - Health score (0-100)
 * @returns {String} Percentile description
 */
export const getPercentileText = (score) => {
  if (score >= 90) return 'Top 1%'
  if (score >= 70) return 'Top 10%'
  if (score >= 50) return 'Top 50%'
  if (score >= 30) return 'Bottom 50%'
  return 'Bottom 10%'
}

/**
 * Format ISO date string to readable format
 * @param {String} isoDate - ISO date string
 * @returns {String} Formatted date string
 */
export const formatDate = (isoDate) => {
  if (!isoDate) return ''

  const date = new Date(isoDate)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
