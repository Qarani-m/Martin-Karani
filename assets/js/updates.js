		let arr_btn = document.getElementsByClassName('down-arrow')
		let category = document.getElementsByClassName('category')
		let projects = document.getElementsByClassName('projects')

		for(var i =0;i<arr_btn.length;i++){
			projects[i].style.display="none";
		}
		projects[0].style.display="block";
		arr_btn[0].style.opacity=1;
	function start(arg) {

		for(var i =0;i<arr_btn.length;i++){
			arr_btn[i].style.opacity=0;
			projects[i].style.display="none";
			category[i].style.backgroundColor="#fff";
		}
			arr_btn[arg].style.opacity=1;
			projects[arg].style.display="block";
	}



	const send_email=()=>{
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "emqarani@gmail.com",
			Password : "dotty7982",
			To : 'emqarani1@gmail.com',
			From : "emqarani@gmail.con",
			Subject : "This is the subject",
			Body : "And this is the body"
		}).then(
		  message => alert(message)
		);

	}
