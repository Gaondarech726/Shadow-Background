const BtnNode = document.querySelector(".js-btn")

function OnClick() {
    alert("Thanks for press!")
}

BtnNode.addEventListener("click", function() {
    OnClick()
})