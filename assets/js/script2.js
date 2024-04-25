$(document).ready(function(){

    $.get("https://digimon-api.vercel.app/api/digimon", function(data, status){
        if (status === "success") {
            $.each(data, function(index, robot) {
                let robotCard = `
                <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${robot.img}" class="card-img-top" alt="${robot.name}">
                    <div class="card-body">
                        <h5 class="card-title">${robot.name}</h5>
                        <p class="card-text">Tipo: ${robot.level}</p>
                    </div>
                </div>
                </div>
                `;
                $("#robot-list").append(robotCard);
            });
        } else {
            $("#robot-list").html("<p>Error al cargar los datos de la API</p>")
        }
    });
    
});
