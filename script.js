
const projectType = document.getElementById("projectType");
const projectSize = document.getElementById("projectSize");
const estimateButton = document.getElementById("estimateButton");
const estimateResult = document.getElementById("estimateResult");

estimateButton.addEventListener("click", function () {
    const type = projectType.value;
    const size = Number(projectSize.value);

    if (!type || !size || size <= 0) {
        estimateResult.textContent =
            "Please choose a project and enter a valid size.";
        return;
    }

    const rates = {
        painting: 3,
        flooring: 8,
        bathroom: 20,
        kitchen: 25
    };

    const estimate = rates[type] * size;

    estimateResult.textContent =
        "Illustrative starting estimate: $" +
        estimate.toLocaleString("en-US") +
        ". Actual costs vary by materials, labor, and project scope.";
});
