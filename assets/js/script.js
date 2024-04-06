document.getElementsByClassName("game-header__button")[1].addEventListener('click', function () {
    var loserButtons = []
    function getLooserButtons() {
        let count = prompt("Bombaların sayı");
        if (Number(count) < 2) {
            location.reload();
        }
        else if (isNaN(Number(count)) == false) {
            loserButtons.length = Number(count)
        }
        else {
            location.reload();
        }
    }
    getLooserButtons();
    var buttons = document.getElementsByClassName("game-tile")
    var placebuttons = document.getElementsByClassName("btnbet");
    var smButtons = document.getElementsByClassName("_sm")
    document.getElementById("money").value = '0.15'
    smButtons[0].addEventListener('click', function () {
        document.getElementById("money").value = '0.15'
    })
    smButtons[1].addEventListener('click', function () {
        if (document.getElementById("money").value == '0.15') {
            console.log("error")
        }
        else if (Number(document.getElementById("money").value) <= 1) {
            let a = (Math.floor((Number(document.getElementById("money").value) - 0.1) * 100) / 100)
            if (a <= 0.15) {
                document.getElementById("money").value = '0.15'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) > 1 && (Number(document.getElementById("money").value <= 10))) {
            let a = (Math.floor((Number(document.getElementById("money").value) - 1) * 100) / 100)

            if (a <= 0.15) {
                document.getElementById("money").value = '0.15'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) >= 10 && (Number(document.getElementById("money").value) <= 100)) {
            let a = (Math.floor((Number(document.getElementById("money").value) - 10) * 100) / 100)

            if (a <= 0.15) {
                document.getElementById("money").value = '0.15'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) > 100) {
            document.getElementById("money").value = '100.00'
        }
    })
    smButtons[2].addEventListener('click', function () {
        if (document.getElementById("money").value == '0.15') {
            document.getElementById("money").value = '0.20'
        }
        else if (Number(document.getElementById("money").value) < 1) {
            let a = (Math.floor((Number(document.getElementById("money").value) + 0.1) * 100) / 100)

            if (a >= 170) {
                document.getElementById("money").value = '170'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) >= 1 && (Number(document.getElementById("money").value) < 10)) {
            let a = (Math.floor((Number(document.getElementById("money").value) + 1) * 100) / 100)

            if (a >= 170) {
                document.getElementById("money").value = '170'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) >= 10 && (Number(document.getElementById("money").value) < 100)) {
            let a = (Math.floor((Number(document.getElementById("money").value) + 10) * 100) / 100)

            if (a >= 170) {
                document.getElementById("money").value = '170'
            }
            else {
                document.getElementById("money").value = a.toString()
            }
        }
        else if (Number(document.getElementById("money").value) >= 100) {
            document.getElementById("money").value = '170.00'
        }
    })
    smButtons[3].addEventListener('click', function () {
        document.getElementById("money").value = 170
    })

    function replace() {

        if (loserButtons.length == 2) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.03</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.13</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.23</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.36</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.67</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.86</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.1</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.38</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.71</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.13</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.65</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.32</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.18</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.33</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x7.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x10.18</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.57</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x19</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x28.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x47.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x95</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x285</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1) {

                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 3) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.08</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.23</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.42</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.64</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.68</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.9</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.8</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x7.64</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x9.93</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.24</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x18.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x26.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.02</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x62.43</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x109.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x218.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x546.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.18k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 4) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.13</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.36</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.64</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.48</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.1</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.93</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.05</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.8</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x12.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x16.81</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x24.28</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x36.42</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x57.23</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x95.38</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x171.68</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x343.36</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x801.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.4k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x12.01k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 5) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.19</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.48</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.26</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.34</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.89</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.16</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x11.56</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x16.81</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x25.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.22</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x63.73</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x109.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x200.29</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x400.58</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x901.31</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.4k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.41k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x50.47k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 6) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.67</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.1</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.34</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.2</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x9.06</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.59</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x21.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x33.62</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x56.03</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x98.04</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x182.08</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x364.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x801.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x24.03k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x168.24k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 7) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.32</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.86</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.68</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.93</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.89</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x9.06</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x14.35</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x23.48</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x70.97</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x133.06</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x266.12</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x576.6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.38k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.8k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x12.68k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x57.08k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x456.66k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 8) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.4</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.1</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.05</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.16</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.59</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x23.48</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x42.27</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x79.84</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x159.67</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x342.16</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x798.37</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.07k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.22k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x22.83k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x114.16k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 9) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.48</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.38</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.9</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x11.56</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x21.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x79.84</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x169.65</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x387.78</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x969.44</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.71k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.82k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x35.28k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x194.08k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 10) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.58</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.71</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.8</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.8</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x16.81</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x33.62</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x70.97</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x159.67</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x387.78</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.03k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.1k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x10.85k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x47.05k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x282.3k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 11) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.7</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.13</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x12.01</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x25.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x56.03</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x133.06</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x342.16</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x969.44</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.1k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x11.63k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x54.28k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x352.87k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 12) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.83</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.65</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x7.64</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x16.81</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.22</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x98.04</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x266.12</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x798.37</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.71k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x10.85k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x54.28k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x380.02k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 13) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.98</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.32</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x9.93</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x24.28</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x63.73</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x182.08</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x576.6</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.07k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.82k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x47.05k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x352.87k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 14) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.16</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.18</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.24</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x36.42</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x109.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x364.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x1.38k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.22k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x35.28k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x282.3k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 15) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.38</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.33</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x18.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x57.23</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x200.29</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x801.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.8k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x22.83k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x194.08k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 16) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.38</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6.33</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x18.21</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x57.23</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x200.29</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x801.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.8k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x22.83k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x194.08k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 17) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.97</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x10.18</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x39.02</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x171.68</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x901.31</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x6k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x57.08k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x999.99k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 18) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.39</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x13.57</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x62.43</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x343.36</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.4k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x24.03k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x456.66k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 19) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x3.96</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x19</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x109.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x801.17</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x8.41k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x168.24k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 20) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            loserButtons[19] = Number(prompt("20. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x4.75</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x28.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x218.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.4k</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x50.47k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1 || i == loserButtons[19] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 21) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            loserButtons[19] = Number(prompt("20. bomba"))
            loserButtons[20] = Number(prompt("21. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x5.94</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x47.5</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x546.25</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x12.01k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1 || i == loserButtons[19] - 1 || i == loserButtons[20] - 1) {

                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 22) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            loserButtons[19] = Number(prompt("20. bomba"))
            loserButtons[20] = Number(prompt("21. bomba"))
            loserButtons[21] = Number(prompt("22. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x7.92</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x95</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x2.18k</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1 || i == loserButtons[19] - 1 || i == loserButtons[20] - 1 || i == loserButtons[21] - 1) {

                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 23) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            loserButtons[19] = Number(prompt("20. bomba"))
            loserButtons[20] = Number(prompt("21. bomba"))
            loserButtons[21] = Number(prompt("22. bomba"))
            loserButtons[22] = Number(prompt("23. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x11.88</div></div><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x285</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1 || i == loserButtons[19] - 1 || i == loserButtons[20] - 1 || i == loserButtons[21] - 1 || i == loserButtons[22] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
        else if (loserButtons.length == 24) {
            loserButtons[0] = Number(prompt("1. bomba"))
            loserButtons[1] = Number(prompt("2. bomba"))
            loserButtons[2] = Number(prompt("3. bomba"))
            loserButtons[3] = Number(prompt("4. bomba"))
            loserButtons[4] = Number(prompt("5. bomba"))
            loserButtons[5] = Number(prompt("6. bomba"))
            loserButtons[6] = Number(prompt("7. bomba"))
            loserButtons[7] = Number(prompt("8. bomba"))
            loserButtons[8] = Number(prompt("9. bomba"))
            loserButtons[9] = Number(prompt("10. bomba"))
            loserButtons[10] = Number(prompt("11. bomba"))
            loserButtons[11] = Number(prompt("12. bomba"))
            loserButtons[12] = Number(prompt("13. bomba"))
            loserButtons[13] = Number(prompt("14. bomba"))
            loserButtons[14] = Number(prompt("15. bomba"))
            loserButtons[15] = Number(prompt("16. bomba"))
            loserButtons[16] = Number(prompt("17. bomba"))
            loserButtons[17] = Number(prompt("18. bomba"))
            loserButtons[18] = Number(prompt("19. bomba"))
            loserButtons[19] = Number(prompt("20. bomba"))
            loserButtons[20] = Number(prompt("21. bomba"))
            loserButtons[21] = Number(prompt("22. bomba"))
            loserButtons[22] = Number(prompt("23. bomba"))
            loserButtons[23] = Number(prompt("24. bomba"))
            document.getElementById("mines").value = loserButtons.length
            document.getElementsByClassName("game-history")[0].innerHTML = `<div class="game-history__inner"><div class="game-history__inner-container"><div data-history-item="false" class="game-history__item" style="min-width: 78px;"><div class="game-history__item-text">x23.75</div></div></div></div>`
            for (let i = 0; i < buttons.length; i++) {
                if (i == loserButtons[0] - 1 || i == loserButtons[1] - 1 || i == loserButtons[2] - 1 || i == loserButtons[3] - 1 || i == loserButtons[4] - 1 || i == loserButtons[5] - 1 || i == loserButtons[6] - 1 || i == loserButtons[7] - 1 || i == loserButtons[8] - 1 || i == loserButtons[9] - 1 || i == loserButtons[10] - 1 || i == loserButtons[11] - 1 || i == loserButtons[12] - 1 || i == loserButtons[13] - 1 || i == loserButtons[14] - 1 || i == loserButtons[15] - 1 || i == loserButtons[16] - 1 || i == loserButtons[17] - 1 || i == loserButtons[18] - 1 || i == loserButtons[19] - 1 || i == loserButtons[20] - 1 || i == loserButtons[21] - 1 || i == loserButtons[22] - 1 || i == loserButtons[23] - 1) {
                    buttons[i].classList.add("loser")
                }
                else {
                    buttons[i].classList.add("winner")
                }

            }
        }
    }


    replace();



    placebuttons[0].addEventListener('click', function () {
        if (placebuttons[0].classList.contains("_placebet")) {
            placebuttons[0].classList.remove("_placebet")
            placebuttons[0].classList.add("_cancel")
            placebuttons[1].classList.remove("_placebet")
            placebuttons[1].classList.add("_cancel")
            document.querySelector(".text-wrapper .text").innerHTML = "Ləğv et"
            document.getElementsByClassName("game-tiles")[0].classList.add("_active")

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function () {
                    if (buttons[i].classList.contains("winner")) {
                        placebuttons[0].innerHTML = `<div class="btn-bg _bg1"></div><div class="btn-bg _bg11"></div><div class="btn-new__border"><div class="btn-bg _bg2"></div><div class="btn-bg _bg22"></div><div class="btn-new__inner"><div class="btn-bg _bg1"></div><div class="btn-bg _bg11"></div><div class="btn-new__text"><div class="text-wrapper"><div class="text">Cash Out</div><div class="_small"><span class="_roboto">₼0.24</span></div></div><div class="indicator _cashout"></div></div></div></div>`
                        if (!buttons[i].classList.contains("_opened")) {
                            buttons[i].classList.add("_opened")
                            buttons[i].classList.add("_win")
                            buttons[i].classList.add("_active")
                            let diamond = document.createElement("div")
                            diamond.classList.add("diamond")
                            let array = document.getElementsByClassName("game-tile__inner")
                            array[i].appendChild(diamond)
                            placebuttons[0].classList.remove("_placebet")
                            placebuttons[0].classList.remove("_cancel")
                            placebuttons[0].classList.add("_cashout")
                            placebuttons[1].classList.remove("_placebet")
                            placebuttons[1].classList.remove("_cancel")
                            placebuttons[1].classList.add("_cashout")
                            document.querySelector(".text-wrapper .text").innerHTML = "Cash out"

                        }
                    }
                    else {
                        if (!buttons[i].classList.contains("_opened")) {
                            setTimeout(function () {
                                location.reload()
                            }, 1000)
                            buttons[i].classList.add("_opened")
                            buttons[i].classList.add("_lose")
                            buttons[i].classList.add("_active")
                            let diamond = document.createElement("div")
                            diamond.classList.add("bomb")
                            let array = document.getElementsByClassName("game-tile__inner")
                            array[i].appendChild(diamond)
                            placebuttons[0].classList.remove("_placebet")
                            placebuttons[0].classList.remove("_cancel")
                            placebuttons[0].classList.add("_cashout")
                            placebuttons[1].classList.remove("_placebet")
                            placebuttons[1].classList.remove("_cancel")
                            placebuttons[1].classList.add("_cashout")
                        }
                    }
                })
            };
        }
        else if (placebuttons[0].classList.contains("_cashout")) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add("_active")
                buttons[i].classList.add("_win")
                if (!buttons[i].classList.contains("_opened")) {
                    if (buttons[i].classList.contains("winner")) {
                        let diamond = document.createElement("div")
                        diamond.classList.add("diamond")
                        let array = document.getElementsByClassName("game-tile__inner")
                        array[i].appendChild(diamond)
                    }
                    else {
                        let bomb = document.createElement("div")
                        bomb.classList.add("bomb")
                        let array = document.getElementsByClassName("game-tile__inner")
                        array[i].appendChild(bomb)
                    }
                }
            }
            setTimeout(function () {
                location.reload()
            }, 1500)
            document.getElementsByClassName("table-holder")[0].innerHTML += `
        <div class="win-screen">
        <div class="win-screen__head">Sən qalibsən!</div>
        <div class="win-screen__content">
        <div class="win-screen__content-payout" style="font-size: 23px;">₼0.24</div>
        <div class="win-screen__content-footer">
        <div class="win-screen__content-text">Çarpan</div>
        <div class="win-screen__content-odd">x1.08</div>
        </div>
        </div>
        </div>`
            placebuttons[0].classList.remove("_cancel")
            placebuttons[0].classList.add("_placebet")
            placebuttons[1].classList.remove("_cancel")
            placebuttons[1].classList.add("_placebet")
            document.querySelector(".text-wrapper .text").innerHTML = "Oyuna başlayın"
        }
        else {
            placebuttons[0].classList.remove("_cancel")
            placebuttons[0].classList.add("_placebet")
            placebuttons[1].classList.remove("_cancel")
            placebuttons[1].classList.add("_placebet")
            document.querySelector(".text-wrapper .text").innerHTML = "Oyuna başlayın"
            setTimeout(function () {
                location.reload()
            }, 1500)
        }
    })


    function changeButtons() {

    }

})