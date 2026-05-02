
//async -> with this i can let operations run in the background and let their result be handled when they are ready
const x = () => "trying to check call-back";

setTimeout(change, 1000);
function change() {
    document.getElementById("change").innerHTML = "ILY";
}

