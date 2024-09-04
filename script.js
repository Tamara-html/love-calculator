//submit button
// jshint esversion:6
var isNotClicked = true;

        function loveCalculator() {
            var yourName = document.getElementById("firstname").value.trim();
            var loversName = document.getElementById("lovername").value.trim();
            var loveFinal;

            if (yourName === "") {
                alert("Please enter your name");
            } else if (loversName === "") {
                alert("Please enter your lover's name");
            } else {
                if (isNotClicked) {
                    loveFinal = calculateLoveScore(yourName, loversName);
                    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + ", your love score is " + loveFinal + " %";
                    isNotClicked = false;
                } else {
                    loveFinal = calculateLoveScore(yourName, loversName);
                    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + ", your love score is " + loveFinal + " %";
                }
            }
        }

        function calculateLoveScore(name1, name2) {
            // Define pairs with 100% match
            var lovePairs100 = [
                ["milos", "tamara"],
                ["john", "jane"],
                ["romeo", "juliet"]
            ];

            // Define pairs with 0% match
            var lovePairs0 = [
                ["milos", "milica"],
                ["milos", "dragana"],
                ["milos", "adela"],
                ["milos", "sinera"],
                ["milos", "teodora"],
            ];

            // Check if names match any predefined 0% pair
            for (var i = 0; i < lovePairs0.length; i++) {
                if ((name1.toLowerCase() === lovePairs0[i][0] && name2.toLowerCase() === lovePairs0[i][1]) ||
                    (name1.toLowerCase() === lovePairs0[i][1] && name2.toLowerCase() === lovePairs0[i][0])) {
                    return 0; // 0% match
                }
            }

            // Check if names match any predefined 100% pair
            for (var j = 0; j < lovePairs100.length; j++) {
                if ((name1.toLowerCase() === lovePairs100[j][0] && name2.toLowerCase() === lovePairs100[j][1]) ||
                    (name1.toLowerCase() === lovePairs100[j][1] && name2.toLowerCase() === lovePairs100[j][0])) {
                    return 100; // 100% match
                }
            }

            // Return a random percentage if no match is found
            return Math.round(Math.random() * 100);
        }

        function resetFunction() {
            document.getElementById("firstname").value = "";
            document.getElementById("lovername").value = "";
            document.getElementById("lovefinal").innerHTML = "";
            isNotClicked = true;
        }