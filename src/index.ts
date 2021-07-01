import "./styles.less";

document.addEventListener("DOMContentLoaded", () => 
{
    let button = document.getElementById("clickMe");
        button.addEventListener("click", () => {
            alert("Cool!");
        });
});