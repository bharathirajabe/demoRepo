$scope.addInputValidation = function(e){
				var validRegex = /^[A-Za-z0-9]+$/;
                var valueInAdd = $(e.currentTarget).val();
				var enteredChar = String.fromCharCode(e.which);
                var charCode = (typeof e.which === "number") ? e.which : e.keyCode, chr = String.fromCharCode(charCode);
                var charChecker = ((isNaN(parseInt(chr)))||(!(enteredChar.match(/^[A-Za-z]+$/))));
                if((valueInAdd.length > 3 || e.which === 13 || e.which === 9) && !(e.which === 8)){
					e.preventDefault();
					return;
				} else if(!validRegex.test(enteredChar) && !(e.which === 8)){
					e.preventDefault();
					return;
				}
                if (!charChecker){
                e.preventDefault();}
			};
			/////////////////////////
  
  ///
  
  $scope.addInputValidation = function(e){
				var validRegex = /^[A-Za-z0-9]+$/;
				var valueInAdd = $(e.currentTarget).val();
				var enteredChar = String.fromCharCode(e.which);
				if((valueInAdd.length > 3 || e.which === 13 || e.which === 9) && !(e.which === 8)){
					e.preventDefault();
					return;
				} else if(!validRegex.test(enteredChar) && !(e.which === 8)){
					e.preventDefault();
					return;
				}
			};

bitbucket.org
https://www.atlassian.com/git/tutorials/ 
https://www.codeschool.com/courses/try-git
