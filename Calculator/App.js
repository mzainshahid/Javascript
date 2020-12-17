function addEvent(val) {
    var Txt = document.getElementById('textinp').value += val
    console.log(Txt)
}

function Solution() {
    let myFirstEvent = document.getElementById('textinp').value
    console.log(myFirstEvent)
    let mySecondEvent = eval(myFirstEvent)
    document.getElementById('textinp').value = mySecondEvent


}

function allClear() {
    document.getElementById('textinp').value = ""

}