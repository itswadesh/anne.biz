export default function ({ app, error, store, redirect }) {
  try {
    const landing = store.$cookies.get('landing')
    if (!landing) redirect('/unused/landing')
  } catch (e) {}
}
