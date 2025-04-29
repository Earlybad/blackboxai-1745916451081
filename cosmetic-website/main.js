document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active styles from all tabs
      tabs.forEach(t => {
        t.classList.remove('bg-pink-600', 'text-white');
        t.classList.add('bg-gray-300', 'text-gray-700');
      });
      // Hide all content sections
      contents.forEach(c => c.classList.add('hidden'));

      // Activate clicked tab and show content
      tab.classList.add('bg-pink-600', 'text-white');
      tab.classList.remove('bg-gray-300', 'text-gray-700');
      const target = tab.getAttribute('data-tab');
      document.getElementById(target).classList.remove('hidden');

      // Smooth scroll to content
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
