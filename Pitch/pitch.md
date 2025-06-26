📦 API Structure
auth router
POST /auth/register – Create user

POST /auth/login – Login user

workouts router
POST /workouts – Add new workout

GET /workouts – Get user’s workouts

DELETE /workouts/:id – Delete a workout

posts router (stretch)
POST /posts – Create new post

GET /posts – View all community posts

//

🧩 Phase 1: Auth + Basic Setup
✅ Backend: build /register & /login with JWT

✅ Frontend: login/register pages in React

✅ Store JWT in localStorage

✅ Protect dashboard route with auth check

//

🏋🏽‍♂️ Phase 2: Workout Logging
✅ Users can log workouts (title, desc, date)

✅ Users can view/delete workouts

✅ Dashboard shows past workouts

✅ Simple form for creating new workouts

✅ Seed sample workouts for demo/testing

//

🗣️ Stretch Phase Community Feed
⏳ Add basic post feed (no comments)

⏳ Submit text-based posts (React form)

⏳ Show username + timestamp on each post

//

🎨 Final Polish
✅ Apply basic CSS styling

✅ Form validation (no empty inputs)

✅ Show errors for failed login/register

✅ Core Features
Users can log workouts

Users can view + delete past workouts

//

💡 Stretch Goals
Add comments to posts

Follow other users

Upload videos or link workout content
