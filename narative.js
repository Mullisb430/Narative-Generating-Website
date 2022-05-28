
// ++ for transport company
// ## for home address
// @@ for age
// $$ for gender
// %% for dialysis center name
// && for dialysis center address

// Regular dialysis trips
var aTripDia = "++ was dispatched to the patient's residence (##)  for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to %% (&&), the stretcher was removed with the straps secured and the rails up.  Pt was moved into %% without incident. Pt was weighed and transferred to the nurse for Tx."

var bTripDia = "++ was dispatched to %% (&&) for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the patient's residence (##), the stretcher was removed with the straps secured and the rails up. Pt was moved into their residence without incident.  Pt care was transferred to themself."


// ++ for transport company
// ## for home address
// @@ for age
// $$ for gender
// %% for dialysis center name
// && for dialysis center address
// ** doctors office name
// ^^ doctors office address
// Doctor trips
var aTripHomeToDoc = "++ was dispatched to the patient's residence (##)  for routine transport of an ESRD Pt.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ** (^^), the stretcher was removed with the straps secured and the rails up.  Pt was moved into ** without incident. Pt was weighed and transferred to the nurse for Tx."

var bTripDocToHome = "++ was dispatched to ** (^^) for routine transport of an ESRD Pt post doctors appointment.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the patient's residence (##), the stretcher was removed with the straps secured and the rails up. Pt was moved into their residence without incident.  Pt care was transferred to themself."

var aTripDiaToDoc = "++ was dispatched to %% (&&) for routine transport of an ESRD Pt, post dialysis treatment to a doctor's appointment.  Unit 08504 arrived on the scene to find a @@ y/o $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport. Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet.  The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ** (^^), the stretcher was removed with the straps secured and the rails up.  Pt was moved into ** without incident. Pt care was transfered to the nurse/tech for Tx."

var bTripDocToDia = "++ was dispatched to ** (^^) for routine transport of an ESRD Pt, post doctors appointment to dialysis treatment.  Unit 08504 arrived on the scene to find a @@ Y/O $$ complaining of general weakness and Pt. has an unsteady gait.  Pt. has medical HX of: ESRD, general weakness.  Pt is a fall risk and requires stretcher transport. See vital signs section for specific vital findings.  No other complaints at this time.  Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and lifted onto the stretcher via 2 medic extremity lift/draw sheet. The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable. Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to the %% (&&), the stretcher was removed with the straps secured and the rails up. Pt was moved into %% without incident.  Pt care was transferred nurse/tech."

var SCEMSPATIENTS = ["GS", "DP", "SD", "MT", "AR", "JL", "CS", "CH", "CM", "DA", "RM"]

var VITALLINKPATIENTS = ["LA", "DA", "FC", "DGr", "LG", "CH", "FH", "ALa", "RM", "JO", "CS", "ETh", "DT", "ETr", "LW", "VA", "GB", "MB", "DGo", "ALo", "CM", "PP", "ER", "SS", "GS", "TW" ]

var companySel = "Southern Care EMS"

var officeName = ""

var appointmentType = ""

var doctorsOfficeData = {
    "Midtown Vascular" : "1445 Georgia Avenue, Macon, Georgia, 31201",
    "The Woundcare Center" : "818 Forsyth Street, Macon, Georgia, 31201",
    "Piedmont Orthopiedic Complex" : "4660 Riverside Drive, Macon, Georgia, 31210",
    "Dr Luu Infusion Center" : "458 Hemlock Street Suite #202, Macon, Georgia, 31201",
    "Kidney Center of Central GA" : "657 Hemlock Street, Macon, Georgia, 31201",
    "Cardiac Consultants of Central Georgia" : "427 Poplar Street, Macon, Georgia, 31201",
    "Atrium Heart & Vascular Care" : "575 First Street, Macon, Georgia, 31201",
    "Central Georgia Vascular Solutions" : "688 Walnut Street, Macon, Georgia, 31201",
    "Atrium Surgery Center" : "840 Pine Street Suite #750, Macon, Georgia, 31201",
    "Vineville Internal Medicine" : "3448 Vineville Avenue, Macon, Georgia, 31204",
    "Atrium Health Medical Center" : "777 Hemlock Street, Macon, Georgia, 31201"
};

function dialysisAppointment()
{
appointmentType = document.getElementById("scemsSelectionTwo").value
generateNarative(1);
}

function doctorAppointment()
{
appointmentType = document.getElementById("doctorSelectionFour").value
generateNarative(2);
}




function generateNarative(appointment)
{
    var selectionDialysisOne = document.getElementById("scemsSelectionOne").value 
    var selectionDoctorOne = document.getElementById("doctorSelectionOne").value
    var selectionDoctorTwo = document.getElementById("doctorSelectionTwo").value
    var selectionDoctorThree = document.getElementById("doctorSelectionThree").value
    var workingNarative = ""

    if (appointment === 2)
    {
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
    } else
    {
        switch (selectionDialysisOne)
        {
            case "A Trip":
                workingNarative = aTripDia
                break;

            case "B Trip":
                workingNarative = bTripDia
                break;
        }
    }

    switch (appointmentType)
    {
        case "GS":

            
            workingNarative = workingNarative.replaceAll("##", "1654 Selma Place, Macon, Georgia, 31204")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 9, 31)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;

        case "DP":

            
            workingNarative = workingNarative.replaceAll("##", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1962, 2, 23)))
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "SD":

            
            workingNarative = workingNarative.replaceAll("##", "30 Durham Dr, Macon, Georgia, 31217")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1950, 0, 23)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
            workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
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

        case "JL":

            
            workingNarative = workingNarative.replaceAll("##", "1106 Green Street, Warner Robins, Georgia, 31093")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 4, 12)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis of Warner Robins")
            workingNarative = workingNarative.replaceAll("&&", "509 North Houston Road, Warner Robins, Georgia, 31093")
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
            
        case "CS":
        
            
            workingNarative = workingNarative.replaceAll("##", "16 Sixth Street, Griffin, Georgia, 30223")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 0, 21)))
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
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
            
        case "LA":
        
            
            workingNarative = workingNarative.replaceAll("##", "88 Johnson Road, Building 2, Lawrenceville, Georgia, 30046")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1949, 0, 1)))                           ///
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "US Renal Care Lawrenceville")
            workingNarative = workingNarative.replaceAll("&&", "3370 Sugarloaf Parkway, Suite A1, Lawrenceville, Georgia, 30214")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "FC":
        
            
            workingNarative = workingNarative.replaceAll("##", "1996 Wynhurst Crossing, Stone Mountain, Georgia, 30088")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1943, 0, 30)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Emory Dialysis Center at Candler")
            workingNarative = workingNarative.replaceAll("&&", "2726 Candler Road, Decatur, Georgia, 30034")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "DGr":
        
            
            workingNarative = workingNarative.replaceAll("##", "6240 Emerald Point Circle, College Park, Georgia, 30349")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1956, 3, 27)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Southern Crescent Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "275 Upper Riverdale Road, Suite B, Riverdale, Georgia, 30274")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "LG":
        
            
            workingNarative = workingNarative.replaceAll("##", "4342 Cedar Lake Cove, Conley, Georgia, 30288")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1942, 7, 29)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Davita Decatur Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "1987 Candler Road, Suite A, Decatur, Georgia, 30034")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "FH":
        
            
            workingNarative = workingNarative.replaceAll("##", "200 Peyton Place SW, Atlanta, Georgia, 30311")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1963, 1, 17)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis Clinic on Washington Road")
            workingNarative = workingNarative.replaceAll("&&", "3492 Washington Road, Suite 400, East Point, Georgia, 30344")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "ALa":
        
            
            workingNarative = workingNarative.replaceAll("##", "3223 Bunny Lane, Decatur, Georgia, 30034")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1943, 5, 25)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Emory Dialysis Center at Candler")
            workingNarative = workingNarative.replaceAll("&&", "2726 Candler Road, Decatur, Georgia, 30034")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "JO":
        
            
            workingNarative = workingNarative.replaceAll("##", "765 Virginia Circle, Forest Park, Georgia, 30297")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1969, 5, 9)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Forest Park Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "380 Forest Parkway, Suite C, Forest Park, Georgia, 30297")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "ETh":
        
            
            workingNarative = workingNarative.replaceAll("##", "2103 Tree Mountain Parkway, Stone Mountain, Georgia, 30083")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 2, 6)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Northlake Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "1350 Montreal Road, Suite 200, Tucker, Georgia, 30084")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "DT":
        
            
            workingNarative = workingNarative.replaceAll("##", "1111 Ardeena Way SE, Conyers, Georgia, 30013")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1960, 6, 3)))    
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis of Lithonia")
            workingNarative = workingNarative.replaceAll("&&", "2485 Park Central Boulevard, Decatur, Georgia, 30035")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "ETr":
        
            
            workingNarative = workingNarative.replaceAll("##", "1208 Concepts 21 Drive, Lithonia, Georgia, 30058")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1948, 11, 15)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis of Lithonia")
            workingNarative = workingNarative.replaceAll("&&", "2485 Park Central Boulevard, Decatur, Georgia, 30035")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "LW":
        
            
            workingNarative = workingNarative.replaceAll("##", "130 Ascot Terrace, Ellenwood, Georgia, 30294")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1941, 3, 24)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "DaVita North Henry Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "3546 Highway 138 SE, Stockbridge, Georgia, 30281")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "VA":
        
            
            workingNarative = workingNarative.replaceAll("##", "2640 Fairlane Drive, Atlanta, Georgia, 30354")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1958, 3, 14)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Dialysis Clinic at Crawford Long")
            workingNarative = workingNarative.replaceAll("&&", "240 Ponce De Leon Avenue NE, Atlanta, Georgia, 30308")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "GB":
        
            
            workingNarative = workingNarative.replaceAll("##", "555 McDaniel Street SW, Apartment 4329, Atlanta, Georgia, 30312")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1950, 2, 31)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Emory Dialysis Center at Northside")
            workingNarative = workingNarative.replaceAll("&&", "610 Northside Drive, North-West Atlanta, Georgia, 30318")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "MB":
        
            
            workingNarative = workingNarative.replaceAll("##", "554 Lynnhaven Drive SW, Atlanta, Georgia, 30310")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1944, 8, 3)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Emory Dialysis Center at Greenbriar")
            workingNarative = workingNarative.replaceAll("&&", "2841 Greenbriar Parkway SW, Atlanta, Georgia, 30331")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "DGo":
        
            
            workingNarative = workingNarative.replaceAll("##", "461 Old Dixie Way, Apartment 4105, Forest Park, Georgia, 30297")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1967, 9, 8)))    
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "Southside Kidney Clinic")
            workingNarative = workingNarative.replaceAll("&&", "3580 Cameron Parkway, Stockbridge, Georgia, 30281")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "ALo":
        
            
            workingNarative = workingNarative.replaceAll("##", "13105 Turnberry Place, Lithonia, Georgia, 30038")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1994, 11, 7)))    
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "Fresenius Kidney Care Snapfinger")
            workingNarative = workingNarative.replaceAll("&&", "5250 Snapfinger Park Drive, Decatur, Georgia, 30035")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "PP":
        
            
            workingNarative = workingNarative.replaceAll("##", "2787 N Decatur Road, Decatur, Georgia, 30033")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 8, 9)))    
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Southern Lane Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "1840 Southern Lane, Decatur, Georgia, 30033")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "ER":
        
            
            workingNarative = workingNarative.replaceAll("##", "1078 First Street NW, Atlanta, Georgia, 30318")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1940, 2, 21)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Fresenius Kidney Care Atlanta Downtown")
            workingNarative = workingNarative.replaceAll("&&", "231 Fourteenth Street, Atlanta, Georgia, 30318")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "SS":
        
            
            workingNarative = workingNarative.replaceAll("##", "6862 Mableton Parkway, Apartment 308, Mableton, Georgia, 30126")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 2, 21)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "Fresenius Kidney Care Mableton")
            workingNarative = workingNarative.replaceAll("&&", "1380 Veterans Memorial Highway, SW Mableton, Georgia, 30126")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "GS":
        
            
            workingNarative = workingNarative.replaceAll("##", "4612 Puckett Street, Forest Park, Georgia, 30297")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1970, 8, 18)))    
            workingNarative = workingNarative.replaceAll("$$", "female")
            workingNarative = workingNarative.replaceAll("%%", "South Fulton Dialysis Center")
            workingNarative = workingNarative.replaceAll("&&", "3268 Greenbriar Parkway, Atlanta, Georgia, 30331")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;
            
        case "TW":
        
        
            workingNarative = workingNarative.replaceAll("##", "48 Johnson Road, NW Atlanta, Georgia, 30318")
            workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 4, 3)))    
            workingNarative = workingNarative.replaceAll("$$", "male")
            workingNarative = workingNarative.replaceAll("%%", "DaVita Southstar Adamsville Dialysis")
            workingNarative = workingNarative.replaceAll("&&", "3651 Bakers Ferry Road, Atlanta, Georgia, 30331")
            workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
            workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
            break;


            
    }
    workingNarative = workingNarative.replaceAll("++", companySel)
    document.getElementById("narativeText").textContent = workingNarative;
}

// function doctorGenerate()
// {

//     switch (selectionDoctorFour)
//     {
//         case "GS":

//             workingNarative = workingNarative.replaceAll("##", "1654 Selma Place, Macon, Georgia, 31204")
//             workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 9, 31)))
//             workingNarative = workingNarative.replaceAll("$$", "female")
//             workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
//             workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
//             workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//             workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//             break

//         case "DP":

//             workingNarative = workingNarative.replaceAll("##", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210")
//             workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1962, 2, 23)))
//             workingNarative = workingNarative.replaceAll("$$", "female")
//             workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
//             workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
//             workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//             workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//             break

//         case "SD":

//             workingNarative = workingNarative.replaceAll("##", "30 Durham Dr, Macon, Georgia, 31217")
//             workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1950, 0, 23)))
//             workingNarative = workingNarative.replaceAll("$$", "male")
//             workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Pine")
//             workingNarative = workingNarative.replaceAll("&&", "745 Pine Street, Macon, Georgia, 31201")
//             workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//             workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//             break
            
//             case "MT":
    
//                 workingNarative = workingNarative.replaceAll("##", "505 Colesium Dr, Macon, Georgia, 31201")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 10, 1)))
//                 workingNarative = workingNarative.replaceAll("$$", "female")
//                 workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
//                 workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "AR":
            
//                 workingNarative = workingNarative.replaceAll("##", "681 Hara Drive, Macon, Georgia, 31206")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1938, 11, 12)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "US Renal Care Macon-Clinton")
//                 workingNarative = workingNarative.replaceAll("&&", "280 Clinton Street, Macon, Georgia, 31201")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "SS":
            
//                 workingNarative = workingNarative.replaceAll("##", "505 Colesium Drive, Macon, Georgia, 31201")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1952, 1, 8)))
//                 workingNarative = workingNarative.replaceAll("$$", "female")
//                 workingNarative = workingNarative.replaceAll("%%", "DCC Pleasant Hill")
//                 workingNarative = workingNarative.replaceAll("&&", "1425 Georgia Avenue, Macon, Georgia, 31201")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
    
//             case "MP":
            
//                 workingNarative = workingNarative.replaceAll("##", "715 Mason Terrace, Perry, Georgia, 31069")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1954, 2, 6)))
//                 workingNarative = workingNarative.replaceAll("$$", "female")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita Dialysis Perry")
//                 workingNarative = workingNarative.replaceAll("&&", "1014 Kieth Drive, Perry, Georgia, 31069")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "CS":
            
//                 workingNarative = workingNarative.replaceAll("##", "16 Sixth Street, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1957, 0, 21)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
//                 workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break
                
//             case "CH":
            
//                 workingNarative = workingNarative.replaceAll("##", "1700 Rover-Zotella Road, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1947, 4, 8)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
//                 workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "DA":
            
//                 workingNarative = workingNarative.replaceAll("##", "160 Wyonia Way, Fayetteville, Georgia, 30215")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1961, 7, 18)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita Fayetteville Dialysis")
//                 workingNarative = workingNarative.replaceAll("&&", "1279 Highway 54 West, ste 110, Fayetteville, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "CM":
            
//                 workingNarative = workingNarative.replaceAll("##", "801 South 9th Street, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1977, 2, 28)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita Iris-City Dialysis")
//                 workingNarative = workingNarative.replaceAll("&&", "521 North Expressway, ste 1509, Griffin, Georgia, 30223")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
                
//             case "RM":
            
//                 workingNarative = workingNarative.replaceAll("##", "670 Milton Drive, McDonough, Georgia, 30252")
//                 workingNarative = workingNarative.replaceAll("@@", getAge(new Date(1949, 0, 27)))
//                 workingNarative = workingNarative.replaceAll("$$", "male")
//                 workingNarative = workingNarative.replaceAll("%%", "DaVita McDonough Dialysis Center")
//                 workingNarative = workingNarative.replaceAll("&&", "114 Dunn Street, McDonough, Georgia, 30253")
//                 workingNarative = workingNarative.replaceAll("**", selectionDoctorTwo)
//                 workingNarative = workingNarative.replaceAll("^^", selectionDoctorThree)
//                 break;
    
//     }
//     document.getElementById("narativeText").textContent = workingNarative;
// }


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
    document.getElementById("narativeText").textContent = workingNarative;
}

function switchCompanies()
{
    var company = document.getElementById("companySelection").value

    switch (company)
    {
        case "SCEMS" :
            propagateSCEMS()
            companySel = "Southern Care EMS"
            break

        case "VitalLink" :
            propagateVitalLink()
            companySel = "VitalLink Transport EMS"
            break
    }
}


function getAge(birthDate)
{
    var currentDate = new Date(Date.now());
    var currentMonth = currentDate.getMonth();
    var currentDayOfMonth =  currentDate.getDate();

    var dateDifference = currentDate.getFullYear() - birthDate.getFullYear();


    if (birthDate.getMonth() < currentMonth)
    {
        return dateDifference;
    } else if (birthDate.getMonth() == currentMonth)
    {
        if(birthDate.getDate() >= currentDayOfMonth)
        { 
            return dateDifference;
        } else
        {
            return dateDifference - 1;
        }
    } else 
    {
        return dateDifference - 1;
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

function propagateSCEMS()
{
    var selectOne = document.getElementById("scemsSelectionTwo")
    var selectTwo = document.getElementById("doctorSelectionFour")
    var optionsList = []

    selectOne.innerHTML = ""
    selectTwo.innerHTML = ""

    for (const pt of SCEMSPATIENTS)
    {
        optionsList.push(pt)
    }
    optionsList.sort()
    for (var pt of optionsList)
    {
        selectOne.innerHTML += "<option>" + pt + "</option>"
        selectTwo.innerHTML += "<option>" + pt + "</option>"
    }

    
}

function propagateVitalLink()
{
    var selectOne = document.getElementById("scemsSelectionTwo")
    var selectTwo = document.getElementById("doctorSelectionFour")
    var optionsList = []

    selectOne.innerHTML = ""
    selectTwo.innerHTML = ""

    for (const pt of VITALLINKPATIENTS)
    {
        optionsList.push(pt)
    }
    optionsList.sort()
    for (var pt of optionsList)
    {
        selectOne.innerHTML += "<option>" + pt + "</option>"
        selectTwo.innerHTML += "<option>" + pt + "</option>"
    }

    

    
}


function fillInDocAddress()
{
    officeAddress = document.getElementById("doctorSelectionThree");
    officeName = document.getElementById("doctorSelectionTwo").value
    console.log(officeName)
    var officeList = Object.keys(doctorsOfficeData)
    for(var i = 0; i < officeList.length; ++i)
    {
        if(officeName == officeList[i])
        {
            officeAddress.value = doctorsOfficeData[officeName]
        }


    }
}

window.addEventListener("load", addSelectOptions);

function addSelectOptions()
{
    var datalist = document.getElementById("officeList")
    options = ""
    var officeList = Object.keys(doctorsOfficeData)

    for(var i = 0; i < officeList.length; ++i)
    {
        console.log("1")
        options += '<option value="' + officeList[i] + '" />';
    }

    datalist.innerHTML = options

}
