function dispensarComida() {
    document.getElementById("food-status").textContent = "Dispensando 100g...";
    document.getElementById("level-bar").style.width = "60%";
    setTimeout(() => {
        document.getElementById("food-status").textContent = "Alimento suficiente";
    }, 2000);
}

function diagnosticoSistema() {
    alert("Verificando sensores...");
    setTimeout(() => {
        alert("Todos los sensores funcionan correctamente.");
    }, 1500);
}
