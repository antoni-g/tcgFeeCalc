$('#price').val('0.00');
$('#shipping').val('0.00');
$( "#price" ).change(function() {
	if($("#price").val().trim().length === 0){
    	$("#price").val('0.00');
    }
  	adjustPrice();
});
$( "#shipping" ).change(function() {
	if($("#shipping").val().trim().length === 0){
    	$("#shipping").val('0.00');
    }
  	adjustPrice();
});
$( "#state" ).change(function() {
  	adjustPrice();
  	$("#tax").text(roundTo(getTax()*100, 5) + '%');
});

function adjustPrice() {
	var raw = parseFloat($('#price').val()) + parseFloat($('#shipping').val());
	if (!isNaN(raw) && (raw != 0.00)) {
		var tcgFee =  raw*.1025;
		var paypalFee = (raw*getTax())+raw*.025;
		var totalFees = tcgFee + paypalFee + .30;
		$('#finalFee').val(roundTo(totalFees,2));
		$('#profit').val(roundTo(raw - totalFees, 2));
	}
	else if (raw == 0.00) {
		$('#finalFee').val(0.00);
		$('#profit').val(0.00);
	}
}

function roundTo(n, digits) {
    var negative = false;
    if (digits === undefined) {
        digits = 0;
    }
        if( n < 0) {
        negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if( negative ) {    
        n = (n * -1).toFixed(2);
    }
    return n;
}

function getTax() {
	var tax = 0.0;
	switch ($('#state').val()) {
		case 'AK':
			tax = 0;
			break;
		case 'AL':
			tax = .04;
			break;
		case 'AR':
			tax = .065;
			break;
		case 'AZ':
			tax = .056;
			break;
		case 'CA':
			tax = .0725;
			break;
		case 'CO':
			tax = .0295;
			break;
		case 'CT':
			tax = .0635;
			break;
		case 'DC':
			tax = .0575;
			break;
		case 'DE':
			tax = 0;
			break;
		case 'FL':
			tax = .06;
			break;
		case 'GA':
			tax = .04;
			break;
		case 'HI':
			tax = .04;
			break;
		case 'IA':
			tax = .06;
			break;
		case 'ID':
			tax = .06;
			break;
		case 'IL':
			tax = .0625;
			break;
		case 'IN':
			tax = .07;
			break;
		case 'KS':
			tax = .065;
			break;
		case 'KY':
			tax = .06;
			break;
		case 'LA':
			tax = .05;
			break;
		case 'MA':
			tax = .0625;
			break;
		case 'MD':
			tax = .06;
			break;
		case 'ME':
			tax = .055;
			break;
		case 'MI':
			tax = .06;
			break;
		case 'MN':
			tax = .06875;
			break;
		case 'MO':
			tax = .04225;
			break;
		case 'MS':
			tax = .07;
			break;
		case 'MT':
			tax = 0;
			break;
		case 'NC':
			tax = .0475;
			break;
		case 'ND':
			tax = .05;
			break;
		case 'NE':
			tax = .055;
			break;
		case 'NH':
			tax = 0;
			break;
		case 'NJ':
			tax = .06625;
			break;
		case 'NM':
			tax = .05125;
			break;
		case 'NV':
			tax = .0685;
			break;
		case 'NY':
			tax = .04;
			break;
		case 'OH':
			tax = .0575;
			break;
		case 'OK':
			tax = .045;
			break;
		case 'OR':
			tax = 0;
			break;
		case 'PA':
			tax = .0600;
			break;
		case 'PR':
			tax = .115;
			break;
		case 'RI':
			tax = .07;
			break;
		case 'SC':
			tax = .06;
			break;
		case 'SD':
			tax = .045;
			break;
		case 'TN':
			tax = .07;
			break;
		case 'TX':
			tax = .0625;
			break;
		case 'UT':
			tax = .0595;
			break;
		case 'VA':
			tax = .053;
			break;
		case 'WA':
			tax = .065;
			break;
		case 'WI':
			tax = .05;
			break;
		case 'WV':
			tax = .06;
			break;
		case 'WY':
			tax = .04;
			break;
		default: tax = 0.0;
	}
	return tax;
}