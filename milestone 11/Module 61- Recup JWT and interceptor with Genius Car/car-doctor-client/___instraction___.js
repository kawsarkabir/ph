/* 
// step 1: ============ create server side token ==========
//  ==================== Generate Token if user is exits  ============
===================********* set user ar upore likhete hobe jete 2jaiga thekei pai

      const userEmail = currentUser?.email || user?.email;
      const logedUser = { email: userEmail }; 
===============*********************=================


if (currentUser) {
    axios
    .post("http://localhost:5000/jwt", logedUser, {
        withCredentials: true,})
     .then((res) => {
            console.log("token response", res.data);});
} else {
    axios.post("http://localhost:5000/logOutWithclearCookie", logedUser, {
        withCredentials: true,});
      }

// step2:=== servier side a route create jwt and set token in cokies client side 

app.post("/jwt", async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "1h",});
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      })
      .send({ success: true });
  });


// step 3: varify token 
1.5=========== install cookie parcer and use middleware in server side













*/
