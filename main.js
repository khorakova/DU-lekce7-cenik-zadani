function selectPlan (planNumber) {
    let basic = document.getElementById("plan1");
    let medium = document.getElementById("plan2");
    let mega = document.getElementById("plan3");
    if (planNumber === 1) {
        basic.classList.add("plan--selected")
        medium.classList.remove("plan--selected")
        mega.classList.remove("plan--selected")
    } else if (planNumber === 2) {
        medium.classList.add("plan--selected")
        basic.classList.remove("plan--selected")
        mega.classList.remove("plan--selected")
    } else if (planNumber === 3) {
        mega.classList.add("plan--selected")
        basic.classList.remove("plan--selected")
        medium.classList.remove("plan--selected")
    }
}
