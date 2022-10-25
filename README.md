# Your Homework Tracker
This project was inspired by my time working as a teacher during lockdown. I wanted to develop a system that could store student's work and allow a teacher to return their work with improvements. I also sought to host this service on a simple and easy-to-use website. I have a achieved this with Homework Tracker, a complete package consisting of a wesbite, database and image cloud-storage service.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![Screenshot of profile page](https://i.ibb.co/419zC1m/frontpage.png)

### How It's Made:

**Tech used:** JavaScript, Moongoose HTML, CSS, Bootstrap

The images that students and teachers upload and download are hosted on cloudinary and are accessed via a MongoDB database. After creating an account, students upload their images with a submission form that allows them to provide a title and caption eg: 'English homework' and 'I loved writing about my weekend!' Other important data is stored on submission, inlcuding the upload date and time and the name of the student. When looking at their profile page, students can see everything they have uploaded and whether or not each of their pieces of homework have been marked by their teacher.
On signing up students are allocated to a class that a teacher is responsible for. A teacher can see the work of every student in their class. When a teacher responds to a student's work with an image and a message, the student's work is flagged as 'Marked'. This lets a student know that they can check their work for feedback.

## A typical database entry for a student's piece of homework:
![Screenshot of post in database](https://i.ibb.co/DWSc3Wt/database.png)

Here you can see how a piece of homework's information is stored. 'title' and 'caption' are decided by the student, 'image' and 'cloudinaryId' are used for data manipulation such as deleting and uploading, 'user' allows a teacher to know who posted the piece of homework, 'class' is what allows this teacher to see this work. Only if a teacher's class matches a student's class can they see the student's work.



## Giving feeback on Homework:
This was a very important aspect of handling data in this project. As mentioned earlier, this project was created not only for sharing images, but for marking work and returning feedback. How to link image together in a database and present them clearly?
![Screenshot of profile page with comment](https://i.ibb.co/4Tpk7ZY/profile.png)
Here shows a view of a specific post, with the original post on the left and the teacher's reply on the right. The teacher has circled areas to improved on and uploaded the image as a comment on the original post. This is acheived by uploading the image to a separate linked database called 'comments'

![Screenshot of comment in database](https://i.ibb.co/j5MT1HB/comment.png)

Here the 'post' is a link to it's parent image. The great thing about this is that comments cannot have further children comments. Only posts receive comments, and they can be commented on by both the teacher and the student that created them. This gives the student the ability to respond to feeback given to them.
Noticing 'cloudinaryId' and 'image' appear on comments just like posts, this means that comments are stored in the exact same way as posts. Only their behaviour is different.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or * I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel
