export default ({ store, redirect }) => {
  if (store.state.user) {
    return redirect("/");
  }
};
