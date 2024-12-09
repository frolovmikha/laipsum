import { isFieldDef } from 'some-library';

// positionDef is the object you want to check
const positionDef = {
    fieldName: "position",
    fieldType: "string"
};

// Use the if statement to check if positionDef is a field definition
if (isFieldDef(positionDef)) {
    // Code to execute if positionDef is a valid field definition
    console.log("positionDef is a valid field definition.");
} else {
    // Code to execute if positionDef is not a valid field definition
    console.log("positionDef is not a valid field definition.");
}
