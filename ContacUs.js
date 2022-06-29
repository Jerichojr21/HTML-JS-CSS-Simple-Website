//Mengirim data ContactUS
function submit() {
  var tes = confirm("kirim data?");
  if (tes == true) {
    alert("Data berhasil disubmit");
  } else {
    alert("Data tidak berhasil disubmit");
  }
}

//Menampilkan dropdown menu
$(document).ready(function () {
  $(".container1 li ").hover(function () {
    $(this).find("ul").slideToggle("normal");
  });
});
