/* AI and I: tag filter for the Articles, Essays, and Recipes pages.
   Runs only in the visitor's browser. It makes no network requests and stores nothing.
   If scripts are off, every item is simply shown and the filter stays hidden. */
(function () {
  /* "computer-science" becomes "Computer Science". */
  function label(tag) {
    return tag.split("-").map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  function setUp(index) {
    var list = index.querySelector(".filter-list");
    var bar = index.querySelector(".tag-filter");
    if (!list || !bar) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("li[data-tags]"));
    var tags = [];

    /* Read each item's tags, and show them as small labels under it. */
    items.forEach(function (item) {
      var own = item.getAttribute("data-tags").trim().split(/\s+/).filter(Boolean);
      var row = document.createElement("div");
      row.className = "item-tags";
      own.forEach(function (tag) {
        if (tags.indexOf(tag) === -1) tags.push(tag);
        var chip = document.createElement("span");
        chip.textContent = label(tag);
        row.appendChild(chip);
      });
      item.appendChild(row);
    });

    if (tags.length === 0) return;
    tags.sort();

    var buttons = [];

    function choose(tag) {
      buttons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.value === tag));
      });
      items.forEach(function (item) {
        var own = item.getAttribute("data-tags").trim().split(/\s+/);
        item.hidden = tag !== "" && own.indexOf(tag) === -1;
      });
    }

    function addButton(text, value) {
      var button = document.createElement("button");
      button.type = "button";
      button.value = value;
      button.textContent = text;
      button.addEventListener("click", function () { choose(value); });
      bar.appendChild(button);
      buttons.push(button);
    }

    addButton("All", "");
    tags.forEach(function (tag) { addButton(label(tag), tag); });

    choose("");
    bar.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".filter-index").forEach(setUp);
  });
})();
