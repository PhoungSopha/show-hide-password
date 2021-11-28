// const showHideInput = (inputOverlay, inputPass, inputIcon) => {
//   const overlay = document.getElementById(inputOverlay),
//     icon = document.getElementById(inputIcon),
//     input = document.getElementById(inputPass)

//   icon.addEventListener("click", () => {
//     if (input.type === "password") {
//       input.type = "text"
//     }
//   })
// }

// showHideInput("input-overlay", "input-password", "input-icon")

const showHiddenInput = (inputOverlay, inputPass, inputIcon) => {
  const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener("click", () => {
    // Change password to text
    if (input.type === "password") {
      // Switch to text
      input.type = "text"

      // Change icon
      iconEye.classList.add("bx-show")
    } else {
      input.type = "password"
      iconEye.classList.remove("bx-show")
    }

    // overlay.classList.toggle("overlay-content")
  })
}

showHiddenInput("input-overlay", "input-pass", "input-icon")
