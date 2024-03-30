
<template>
<div>
    <section class=" h-screen p-5">
        <div>
            <img class="logo block w-fit h-40 m-auto" src="/icons/kindred.svg" alt="Discover Nuxt 3" />
            <h1 class=" text-center md:text-8xl font-bold mx-5">
                One relationship at a time
            </h1>
            <p class=" text-center text-4xl py-3 w-2/3 mx-auto">At Kindred, we're on a mission to nurture the human spirit, one genuine connection at a time. Sign up to be first in line when we launch!</p>
        </div>
        <div>
           
        <div class="list">
            <form class="grid grid-rows-3 md:flex justify-center mt-5"
  method="post"
  action="https://app.loops.so/api/newsletter-form/YOUR_FORM_ENDPOINT"
>
  <input type="text" class="rounded-md border border-slate-200 p-2 md:mr-2" name="firstName" placeholder="First name" required>
  <input type="email" class="rounded-md border border-slate-200 p-2 mr-2" name="email" placeholder="Email" required>
  <input type="hidden" name="userGroup" value="Website signups">
  <button class=" h-10 px-6 font-semibold rounded-md border  text-white bg-kindred" type="submit">Enter waitlist</button>
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

.wait{
    justify-content: center;
}
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