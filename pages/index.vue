
<template>
    <div>
        <section class=" h-screen p-5">
            <div>
                <img class="logo block w-fit h-16 md:h-40 m-auto" src="/icons/kindred.svg" alt="Discover Nuxt 3" />
                <h1 class=" md:text-center mb-4 mt-6 md:py-4 text-4xl md:text-6xl font-bold md:mx-5">
                    Nurture life-long connection
                </h1>
                <p class=" md:text-center  w-full md:text-3xl py-3 md:w-2/3 mx-auto">At Kindred, We empower ambitious young people with the tools they need to nurture valuable professional and personal relationships 💜. Sign up to be first in line when we launch!</p>
            </div>
            <div>
               
            <div class="list mb-6">
                <form class="grid grid-rows-3 md:flex md:justify-center gap-3  mt-5 "
      method="post"
      action="https://app.loops.so/api/newsletter-form/clu6fo2t000vzmuw9u3mi2v84"
    >
      <input type="text" class="rounded-md border border-slate-200 p-2  md:mr-2" name="firstName" placeholder="First name" required>
      <input type="email" class="rounded-md border border-slate-200 p-2 md:mr-2" name="email" placeholder="Email" required>
      <input type="hidden" name="userGroup" value="Website signups">
      <button class=" h-14 px-6 font-semibold rounded-md border  text-white bg-kindred" type="submit">Enter waitlist</button>
    </form>
    
            </div>
    
            <!-- <div>
                <ul class=" grid grid-cols-2 w-1/4 mx-auto items-center mt-4">
                    <li>
                        <div class=" border rounded-md p-2">
                           
                                <a href="https://kindred.productlane.com/roadmap" target="_blank" rel="noopener noreferrer">View Roadmap</a>
                         
                        </div>
                    </li>
                    <li>
                        <div class=" border rounded-md p-2">
                            <a href="kindred.productlane.com/changelog" target="_blank" rel="noopener noreferrer">View Changelog</a>
                        </div>
                    </li>
                </ul>
            </div> -->
    
    
            </div>
        </section>
        
      
    </div>
    </template>
    
    
    <script setup>
    
    
    function handleSubmit() {
      const formBody = `firstName=${encodeURIComponent(firstName)}&email=${encodeURIComponent(email)}`;
    
      // Change this URL to your own endpoint URL
      fetch("https://app.loops.so/api/newsletter-form/YOUR_FORM_ENDPOINT", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    }
    </script>
    
    <style>

    
 
    /* .list {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .logo{
        height: 170px;
        display: block;
        margin: auto;
        width: fit-content;
        padding: 20px;
    }
    
    
    h1{
        font-size: 80px;
        text-align: center;
        margin: 0;
    }
    
    p{
        font-size: 28px;
        text-align: center;
        width: 80%;
        margin: auto;
    } */
    
    </style>