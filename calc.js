$('#price').val('0.00');
$('#shipping').val('0.00');
$( "#price" ).change(function() {
  	adjustPrice();
});
$( "#shipping" ).change(function() {
  	adjustPrice();
});

function adjustPrice() {
	var raw = parseFloat($('#price').val()) + parseFloat($('#shipping').val());
	var regex=/^[0-9]+$/;
	if (!isNaN(raw)) {
		var tcgFee =  raw*.1025;
		var paypalFee = raw*.025;
		var totalFees = tcgFee + paypalFee + .30;
		$('#finalFee').val(roundTo(totalFees,2));
		$('#profit').val(roundTo(raw - totalFees, 2));
	}
}

function roundTo(n, digits) {
    if (digits === undefined) {
      digits = 0;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
}

function getTax() {
	var tax = 0.0;
	switch ($('#state').val()) {
		case 'PA':
			tax = .06;
			break;
		default: tax = 0.0;
	}
}