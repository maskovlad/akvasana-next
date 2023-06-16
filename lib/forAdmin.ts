async function forAdmin(text:string) {
  await fetch(`https://mascode.vercel.app/api/bot?text=${text}`)
}

export default forAdmin