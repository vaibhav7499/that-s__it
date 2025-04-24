

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
   const tabContents = document.querySelectorAll('.tab-content');
      
   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
             
              tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
              
          
              tab.classList.add('active');
              const tabId = tab.getAttribute('data-tab');
              document.getElementById(tabId).classList.add('active');
          });
      });
});


function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}