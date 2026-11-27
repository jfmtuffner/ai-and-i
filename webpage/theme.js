/* AI and I: theme handling.
   Runs only in the visitor's browser. It makes no network requests.
   The chosen theme is remembered in the browser's own local storage. */
(function () {
  var STORAGE_KEY = "ai-and-i-theme";
  var THEMES = ["dark", "machine", "light"];
  var DEFAULT_THEME = "dark";

  function readSaved() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return THEMES.indexOf(value) !== -1 ? value : DEFAULT_THEME;
    } catch (error) {
      return DEFAULT_THEME;
    }
  }

  function applyTheme(name) {
    document.documentElement.setAttribute("data-theme", name);
  }

  function saveTheme(name) {
    try {
      window.localStorage.setItem(STORAGE_KEY, name);
    } catch (error) {
      /* Storage blocked: the theme still applies until the page is closed. */
    }
  }

  /* Runs immediately, before the page is drawn, so there is no flash. */
  applyTheme(readSaved());

  /* On the settings page, connect the radio buttons to the theme. */
  document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll('input[name="theme"]');
    var current = readSaved();
    inputs.forEach(function (input) {
      input.checked = input.value === current;
      input.addEventListener("change", function () {
        if (input.checked) {
          applyTheme(input.value);
          saveTheme(input.value);
        }
      });
    });
  });
})();
