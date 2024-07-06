import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/react"

export interface CompilerSliceStateType {
    fullCode: {
        html: string
        css: string
        javascript: string
    }
    currentLanguage: "html" | "css" | "javascript"
}

const initialState: CompilerSliceStateType = {
    fullCode: {
    html: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Color Changer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Simple Color Changer</h1>
        <button id="changeColorBtn">Change Color</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

h1 {
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}`,
    javascript: `document.getElementById('changeColorBtn').addEventListener('click', function() {
var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = randomColor;
});`
    },
    currentLanguage: "html",
}

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload 
        },
        updateFullCode: ( state, action: PayloadAction<CompilerSliceStateType["fullCode"]> ) => {
            state.fullCode = action.payload;
        },
    },
})

export default compilerSlice.reducer
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } = compilerSlice.actions
