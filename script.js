    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

      if (window.scrollY > 300) {

        scrollBtn.classList.remove("hidden");

      } else {

        scrollBtn.classList.add("hidden");

      }

    });

    scrollBtn.onclick = () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    };


  const html = document.documentElement;

    function applyTheme(theme) {

      if (theme === "dark") {
        html.classList.add("dark");
      }

      else if (theme === "light") {
        html.classList.remove("dark");
      }

      else {

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }

      }

    }

    function setTheme1(theme) {

      localStorage.setItem("theme", theme);

      applyTheme(theme);

      document.querySelectorAll(".theme-menu").forEach(menu => {
        menu.classList.add("hidden");
      });

    }

    function toggleThemeMenu(btn) {

      const menu = btn.nextElementSibling;

      menu.classList.toggle("hidden");

    }

    document.querySelectorAll(".theme-toggle").forEach(btn => {

      btn.addEventListener("click", function (e) {

        e.stopPropagation();

        toggleThemeMenu(this);

      });

    });

    document.addEventListener("click", () => {

      document.querySelectorAll(".theme-menu").forEach(menu => {

        menu.classList.add("hidden");

      });

    });

    const savedTheme = localStorage.getItem("theme") || "system";

    applyTheme(savedTheme);

    window.matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {

        if ((localStorage.getItem("theme") || "system") === "system") {
          applyTheme("system");
        }

      });