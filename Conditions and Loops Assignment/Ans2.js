const marks = 91.5;

const grade = parseInt(marks)


switch (true) {
    case (grade>=90):
        console.log("A grade");
        break;
    case (grade>=70 && grade<90):
        console.log("B grade");
        break;
    case (grade>=50 && grade<70):
        console.log("C grade");
        break;
    case (grade<50):
        console.log("F grade");
        break;


    default:
        console.log("Grade must be in number");
        break;
}

