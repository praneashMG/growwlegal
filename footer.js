document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#0F172A] text-white w-full">

  <!-- MAIN FOOTER -->
  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- ABOUT -->
      <div>
        <h3 class="text-2xl font-bold mb-4 text-[#CBD5E1]">
          Groww Legal
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          We provide strategic legal solutions for individuals and businesses.
          Our firm is committed to integrity, professionalism, and client success.
        </p>

        <div class="flex gap-4 mt-4 text-lg">
          <a href="#" class="hover:text-[#CBD5E1] transition"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#CBD5E1] transition"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="hover:text-[#CBD5E1] transition"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <!-- PRACTICE AREAS -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#CBD5E1]">
          Practice Areas
        </h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white transition">Corporate Law</a></li>
          <li><a href="#" class="hover:text-white transition">Criminal Defense</a></li>
          <li><a href="#" class="hover:text-white transition">Family Law</a></li>
          <li><a href="#" class="hover:text-white transition">Property Law</a></li>
        </ul>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#CBD5E1]">
          Quick Links
        </h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
          <li><a href="blog.html" class="hover:text-white transition">Blog</a></li>
          <li><a href="service.html" class="hover:text-white transition">Services</a></li>
          <li><a href="contact.html" class="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#CBD5E1]">
          Contact Us
        </h3>

        <ul class="space-y-3 text-gray-400 text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#CBD5E1]"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#CBD5E1]"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#CBD5E1]"></i>
            <span>info@growwlegal.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>


  <!-- BOTTOM BAR -->
  <div class="border-t border-gray-800 py-6 text-center text-gray-500 text-xs px-4">
    © ${new Date().getFullYear()} Groww Legal Consultancy. All Rights Reserved.
  </div>

</footer>
`;
});
