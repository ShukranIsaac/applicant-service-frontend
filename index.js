let course = {
    id: 3,
    name: "INF 221 - Web Dev & Dev",
    description: "",
    numberOfStudents: 95,
    // courseLecturer: "",
    summary: () => {
        return this.name
    },
    department: {
        id: 12,
        name: "Computer Science",
        students: 4000,
        staff: 20
    }
}

course.courseLecturer = "Isaac"

const summary = course.summary.bind(course)

// console.log(course)
// console.log(summary())
console.log(course.department.name)
const { id, department: { name, students }, ...rest } = course
console.log(id)
console.log(rest)
console.log(name, students)


// function readURL(input) {
//     if (input.files && input.files[0]) {

//         // let reader = new FileReader();

//         reader.onload = function (e) {
//             // $('.file-upload-wrap').hide();

//             // $('.file-upload-image').attr('src', e.target.result);
//             // $('.file-upload-content').show();

//             // $('.image-title').html(input.files[0].name);
//         };

//         reader.onprogress = function (read, e) {
//             console.log(read)
//             console.log(e)
//         }

//         reader.readAsDataURL(input.files[0]);

//         console.log(input.files)
//         console.log(reader)
//         console.log(reader.result)
//     } else {
//         removeUpload();
//     }
// }

// function removeUpload() {
//     // $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//     // $('.file-upload-content').hide();
//     // $('.file-upload-wrap').show();
// }

// $('.file-upload-wrap').bind('dragover', function () {
//     // $('.file-upload-wrap').addClass('file-dropping');
// });
// $('.file-upload-wrap').bind('dragleave', function () {
//     // $('.file-upload-wrap').removeClass('file-dropping');
// });