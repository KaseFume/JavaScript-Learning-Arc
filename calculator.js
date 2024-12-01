document.getElementById("calculate").addEventListener("click", () => {
    const eval_calculation = document.getElementById("calculation").value;
    let result;
    try {
        result = eval(`${eval_calculation}`);
    } catch (error) {
        result = "Error in calculation";
    }
    document.getElementById("result").textContent = `Result: ${result}`;
});

