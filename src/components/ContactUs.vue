<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>
<template>
    

    <div class="py-24">
        <h1 class="text-center text-4xl font-semibold text-orange-400">Contact Us</h1>

    <div class="mx-48 p-10 ">   
        <h1 class="font-semibold text-2xl  text-orange-400">HeadOffice</h1>
        <hr class="pb-8">
    <div class=" lg:grid grid-cols-3  ">
    <div>
        <h1 class=" font-bold pb-2 text-xl">Mohan Groups</h1>  
        <p>Mohan Building<br />
             Mohan Block <br />
            Bole Subcity, kebele 02, House no. 393/2 <br />
            Off Zimbabwe Street around Japan Embassy <br />
            Addis Ababa, Ethiopia <br /> </p>
        
        

        <p class="pt-4"> 
            <span class="material-icons size-1 text-orange-400 pr-8">phone</span> 
            +251-11-6621848 / 49 <br />
            <span class="material-icons size-1 text-orange-400 pr-8">fax</span>
             +251-11-6620326 <br />
        </p>
        <p><span class="material-icons size-1 text-orange-400 pr-8">email</span>
            harsh@mohanint.com</p>
    </div>

    <div class="w-[20rem] h-[26rem] object-contain ">
        <img src="../assets/img/mohan.jpg" alt="">
    </div>
            <div class="w-[20rem] h-[18rem] overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.842678994352!2d38.778480975950714!3d8.986620291073027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84f833c5f24f%3A0xf4bc60b8a246e454!2zTW9oYW4gUGxjIHwgQm9sZSBNaWNoYWVsIHwg4Yie4YiD4YqVIOGNkuGKpOGIjeGIsiB8IOGJpuGIjCDhiJrhiqvhiqThiI0!5e0!3m2!1sen!2set!4v1727492554868!5m2!1sen!2set" 
            width="320" 
            height="288" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" r
            eferrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            
        </div>

<div class="grid grid-col-2">
    <div class="md:w-1/2 max-w-xl p-6 ">
  <div class="relative">
        <h1 class="pb-8 text-orange-400 text-xl text-center">ENQUIRY FORM</h1>
        <h3 class="text-base pb-2">Company Name</h3>
        <input type="text" id="nameInput" placeholder="Enter Company Name" 
            class="block w-full px-2 py-2 text-sm text-gray-900 bg-transparent 
            border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 
            focus:border-orange-400peer mb-4" />

        <h3 class="text-base pb-2">Email Id</h3>
        <input type="text" id="emailInput" placeholder="Enter Your Email Id" 
            class="block w-full px-2 py-2 text-sm text-gray-900 bg-transparent border
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 
            focus:border-orange-400 peer mb-4" />
        
        <h3 class="text-base pb-2">Subject</h3>
        <input type="text" id="subjectInput" placeholder="Enter your Subject" 
            class="block w-full px-2 py-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 peer mb-4" />
      
        <h3 class="text-base pb-2">Message</h3>
        <textarea id="messageInput" placeholder="Enter your Message" 
            class="block w-full px-2 py-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 peer h-32 mb-4"></textarea>
       

        <button class="bg-orange-400 text-white mt-4 py-3 px-10 shadow-lg hover:bg-orange-400 text-sm">
            Submit
        </button>
    </div>
    </div>
</div>




</div>
    </div>

    
    <NavBar />
    <Footer />
</template>