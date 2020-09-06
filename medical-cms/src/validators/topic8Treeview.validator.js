export const validateYear = (year) =>{
    const string = year
    const checkIntYear = parseInt(year)
    let status = true
    let massage
    console.info(year)
    console.info(string)
    if(!checkIntYear || string != checkIntYear )
    {
        console.info(checkIntYear)
        console.info("LOL")
        status = false
        massage = "please enter number example --> 2562 "
        return {status,massage}
    }
    if(checkIntYear.toString().length != 4)
    {
        console.info("LOL")
        status = false
        massage = "Please enter a 4-digit number of years "
        return {status,massage}
    }
    console.info(status)
    return ({status})
}