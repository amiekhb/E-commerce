// import jwt from "jsonwebtoken";

// const auth = (req: Request, res: Response) => {
//   const token: string | undefined | string[] =
//     req.headers.authorization || req.headers.Authorization;
//   // console.log("nevtersen hereglegch shalgah"
//   if (!req.headers.authorization) {
//     res.status(401).json({ message: "nevtrene uu" });
//   }
//   const token = req.headers.authorization.split(" ")[1];
//   const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
//   req.user = user;
//   next();
// };
// module.exports = { auth };
