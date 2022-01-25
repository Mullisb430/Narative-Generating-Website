// ## for home address
// @@ for age
// $$ for gender
// %% for dialysis center name
// && for dialysis center address

// Regular dialysis trips
var aTripDia = "Southern Care EMS was dispatched to the patient's residence (##)  for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to %% (&&), the stretcher was removed with the straps secured and the rails up.  Pt was moved into %% without incident. Pt was weighed and transferred to the nurse for Tx."

var bTripDia = "Southern Care EMS was dispatched to %% (&&) for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__. Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the patient's residence (##), the stretcher was removed with the straps secured and the rails up. Pt was moved into their residence without incident.  Pt care was transferred to themself."


// ## for home address
// @@ for age
// $$ for gender
// %% for dialysis center name
// && for dialysis center address
// ** doctors office name
// ^^ doctors office address
// Doctor trips
var aTripHomeToDoc = "Southern Care EMS was dispatched to the patient's residence (##)  for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ** (^^), the stretcher was removed with the straps secured and the rails up.  Pt was moved into ** without incident. Pt was weighed and transferred to the nurse for Tx."

var bTripDocToHome = "Southern Care EMS was dispatched to ** (^^) for routine transport of an ESRD Pt post doctors appointment.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__. Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the patient's residence (##), the stretcher was removed with the straps secured and the rails up. Pt was moved into their residence without incident.  Pt care was transferred to themself."

var aTripDiaToDoc = "Southern Care EMS was dispatched to %% (&&) for routine transport of an ESRD Pt, post dialysis treatment to a doctor's appointment.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ** (^^), the stretcher was removed with the straps secured and the rails up.  Pt was moved into ** without incident. Pt care was transfered to the nurse/tech for Tx."

var bTripDocToDia = "Southern Care EMS was dispatched to ** (^^) for routine transport of an ESRD Pt, post doctors appointment to dialysis treatment.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse___, B/P __/__. Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of _/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the %% (&&), the stretcher was removed with the straps secured and the rails up. Pt was moved into %% without incident.  Pt care was transferred nurse/tech."





function scemsNarative()
{
    var selectionDialysisOne = document.getElementById("scemsSelectionOne").value 
    var selectionDialysisTwo = document.getElementById("scemsSelectionTwo").value  
    var workingNarative = ""

    switch (selectionDialysisOne)
    {
        case "A Trip":
            workingNarative = aTripDia
            break;

        case "B Trip":
            workingNarative = bTripDia
            break;
    }

    switch (selectionDialysisTwo)
    {
        case "GS":

            workingNarative = workingNarative.replaceAll("##", "1654 Selma Place, Macon, Georgia, 31204")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 9, 31)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            break;

        case "DP":

            workingNarative = workingNarative.replaceAll("##", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1962, 2, 23)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            break;
            
        case "SD":

            workingNarative = workingNarative.replaceAll("##", "30 Durham Dr, Macon, Georgia, 31217")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1950, 0, 23)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            break;
            
        case "MT":

            workingNarative = workingNarative.replaceAll("##", "505 Colesium Dr, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 10, 1)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
            workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
            break;
            
        case "AR":
        
            workingNarative = workingNarative.replaceAll("##", "681 Hara Drive, Macon, Georgia, 31206")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1938, 11, 12)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
            workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
            break;
            
        case "SS":
        
            workingNarative = workingNarative.replaceAll("##", "505 Colesium Drive, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 1, 8)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DCC Pleasant Hill")
            workingNarative = workingNarative.replaceAll("&&", "1425 Georgia Avenue, Macon, Georgia, 31201")
            break;

        case "MP":
        
            workingNarative = workingNarative.replaceAll("##", "715 Mason Terrace, Perry, Georgia, 31069")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 2, 6)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis Perry")
            workingNarative = workingNarative.replaceAll("&&", "1014 Kieth Drive, Perry, Georgia, 31069")
            break;
            
        case "CS":
        
            workingNarative = workingNarative.replaceAll("##", "16 Sixth Street, Griffin, Georgia, 30223")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 0, 21)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
            break;
            
        case "CH":
        
            workingNarative = workingNarative.replaceAll("##", "1700 Rover-Zotella Road, Griffin, Georgia, 30223")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 4, 8)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
            break;
            
        case "DA":
        
            workingNarative = workingNarative.replaceAll("##", "160 Wyonia Way, Fayetteville, Georgia, 30215")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1961, 7, 18)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Fayetteville Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "1279 Highway 54 West, ste 110, Fayetteville, Georgia, 30223")
            break;
            
        case "CM":
        
            workingNarative = workingNarative.replaceAll("##", "801 South 9th Street, Griffin, Georgia, 30223")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1977, 2, 28)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
            break;
            
        case "RM":
        
            workingNarative = workingNarative.replaceAll("##", "670 Milton Drive, McDonough, Georgia, 30252")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1949, 0, 27)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita McDonough Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "114 Dunn Street, McDonough, Georgia, 30253")
            break;


            
    }
    document.getElementById("narative").textContent = workingNarative;
}

function doctorGenerate()
{
    var selectionDoctorOne = document.getElementById("doctorSelectionOne").value
    var selectionDoctorTwo = document.getElementById("doctorSelectionTwo").value
    var selectionDoctorThree = document.getElementById("doctorSelectionThree").value
    var selectionDoctorFour = document.getElementById("doctorSelectionFour").value
    var workingNarative = ""

    switch (selectionDoctorOne)
    {

        case "A trip from home to doctor":
            workingNarative = aTripHomeToDoc
            break

        case "A trip from dialysis to doctor":
            workingNarative = aTripDiaToDoc
            break

        case "B trip from doctor to dialysis":
            workingNarative = bTripDocToDia
            break

        case "B trip from doctor to home":
            workingNarative = bTripDocToHome
            break

    }

    switch (selectionDoctorFour)
    {
        case "GS":

            workingNarative = workingNarative.replaceAll("##", "1654 Selma Place, Macon, Georgia, 31204")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 9, 31)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break

        case "DP":

            workingNarative = workingNarative.replaceAll("##", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1962, 2, 23)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break

        case "SD":

            workingNarative = workingNarative.replaceAll("##", "30 Durham Dr, Macon, Georgia, 31217")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1950, 0, 23)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break
            
            case "MT":
    
                workingNarative = workingNarative.replaceAll("##", "505 Colesium Dr, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 10, 1)))
                workingNarative = workingNarative.replaceAll("$$", "female")
                workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
                workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "AR":
            
                workingNarative = workingNarative.replaceAll("##", "681 Hara Drive, Macon, Georgia, 31206")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1938, 11, 12)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
                workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "SS":
            
                workingNarative = workingNarative.replaceAll("##", "505 Colesium Drive, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 1, 8)))
                workingNarative = workingNarative.replaceAll("$$", "female")
                workingNarative = workingNarative.replaceAll("%%", "DCC Pleasant Hill")
                workingNarative = workingNarative.replaceAll("&&", "1425 Georgia Avenue, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
    
            case "MP":
            
                workingNarative = workingNarative.replaceAll("##", "715 Mason Terrace, Perry, Georgia, 31069")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 2, 6)))
                workingNarative = workingNarative.replaceAll("$$", "female")
                workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis Perry")
                workingNarative = workingNarative.replaceAll("&&", "1014 Kieth Drive, Perry, Georgia, 31069")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "CS":
            
                workingNarative = workingNarative.replaceAll("##", "16 Sixth Street, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 0, 21)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
                workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break
                
            case "CH":
            
                workingNarative = workingNarative.replaceAll("##", "1700 Rover-Zotella Road, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 4, 8)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
                workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "DA":
            
                workingNarative = workingNarative.replaceAll("##", "160 Wyonia Way, Fayetteville, Georgia, 30215")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1961, 7, 18)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "DaVita Fayetteville Dialysis")
                workingNarative = workingNarative.replaceAll("&&", "1279 Highway 54 West, ste 110, Fayetteville, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "CM":
            
                workingNarative = workingNarative.replaceAll("##", "801 South 9th Street, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1977, 2, 28)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
                workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
                
            case "RM":
            
                workingNarative = workingNarative.replaceAll("##", "670 Milton Drive, McDonough, Georgia, 30252")
                workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1949, 0, 27)))
                workingNarative = workingNarative.replaceAll("$$", "male")
                workingNarative = workingNarative.replaceAll("%%", "DaVita McDonough Dialysis Center")
                workingNarative = workingNarative.replaceAll("&&", "114 Dunn Street, McDonough, Georgia, 30253")
                workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
                workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
                break;
    
    }
    document.getElementById("narative").textContent = workingNarative;
}


function customPatientGenerate()
{
    // Patient's Adress
    patientAdress = document.getElementById("customPatientOne").value
    // Birth Month
    birthMonth = document.getElementById("customPatientTwo").value
    // Birth Day
    birthDay = document.getElementById("customPatientThree").value
    // Birth Year
    birthYear = document.getElementById("customPatientFour").value
    // Gender
    gender = document.getElementById("customPatientFive").value
    // Name of where patient is going
    nameOfPlace = document.getElementById("customPatientSix").value
    // Address for where patient is going
    addressOfPlace = document.getElementById("customPatientSeven").value
    // Atrip or Btrip
    tripType = document.getElementById("customPatientEight").value


// ## for home address
// @@ for age
// $$ for gender
// %% for dialysis center name
// && for dialysis center address
// ** doctors office name
// ^^ doctors office address
    switch (tripType)
    {
        case "A Trip":
            workingNarative = aTripDia
            workingNarative = workingNarative.replaceAll("##", patientAdress)
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(parseInt(birthYear), parseInt(birthMonth)-1, parseInt(birthDay))))
            workingNarative = workingNarative.replaceAll("$$", gender)
            workingNarative = workingNarative.replaceAll("%%", nameOfPlace)
            workingNarative = workingNarative.replaceAll("&&", addressOfPlace)
            break

        case "B Trip":
            workingNarative = bTripDia
            workingNarative = workingNarative.replaceAll("##", patientAdress)
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(parseInt(birthYear), parseInt(birthMonth)-1, parseInt(birthDay))))
            workingNarative = workingNarative.replaceAll("$$", gender)
            workingNarative = workingNarative.replaceAll("%%", nameOfPlace)
            workingNarative = workingNarative.replaceAll("&&", addressOfPlace)
            break
    }
    document.getElementById("narative").textContent = workingNarative;
}


function getAge(birthDate)
{
    var currentDate = new Date(Date.now());
    var currentMonth = currentDate.getMonth();
    var currentDayOfMonth =  currentDate.getDate();

    var dateDifference = currentDate.getFullYear() - birthDate.getFullYear();

    if (birthDate.getMonth > currentMonth)
    {
        return dateDifference;
    } else if (birthDate.getMonth() === currentMonth)
    {
        if(birthDate.getDate() >= currentDayOfMonth)
        { 
            return dateDifference;
        } else
        {
            return --dateDifference;
        }
    } else 
    {
        return --dateDifference;
    }

}

function birthMonth()
{
    document.getElementById("birthMonth").textContent = document.getElementById("customPatientTwo").value
}

function birthDay()
{
    document.getElementById("birthDay").textContent = document.getElementById("customPatientThree").value
}

function birthYear()
{
    document.getElementById("birthYear").textContent = document.getElementById("customPatientFour").value
}