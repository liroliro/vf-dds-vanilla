;(function ($) {
	$('input[name="vf-daterange-localised"]').daterangepicker(
		{
			locale: {
				format: 'DD/MM/YYYY',
				separator: ' - ',
				applyLabel: 'Apply',
				cancelLabel: 'Cancel',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				weekLabel: 'W',
				daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
				monthNames: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				],
				firstDay: 1
			},
			parentEl: '.vf-calendar',
			startDate: '20/8/2021',
			endDate: '29/08/2021'
		},
		function (start, end, label) {
			console.log('start: ', start)
			console.log('end: ', end)
		}
	)

	$('input[name="vf-daterange-localised-svenska"]').daterangepicker(
		{
			autoApply: true,
			showWeekNumbers: true,
			locale: {
				format: 'YYYY/MM/DD',
				separator: ' - ',
				applyLabel: 'Godkänn',
				cancelLabel: 'Rensa',
				fromLabel: 'Från',
				toLabel: 'Till',
				customRangeLabel: 'Custom',
				weekLabel: 'V',
				daysOfWeek: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
				monthNames: [
					'Januari',
					'Februari',
					'Mars',
					'April',
					'Maj',
					'Juni',
					'Juli',
					'Augusti',
					'September',
					'Oktober',
					'November',
					'December'
				],
				firstDay: 1
			},
			parentEl: '.vf-calendar-svenska',
			startDate: '2021/08/20',
			endDate: '2021/08/28'
		},
		function (start, end, label) {}
	)

	$('input[name="vf-daterange-single"]').daterangepicker(
		{
			singleDatePicker: true,
			autoApply: true,
			locale: {
				format: 'DD/MM/YYYY',
				separator: ' - ',
				applyLabel: 'Apply',
				cancelLabel: 'Cancel',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				weekLabel: 'W',
				daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
				monthNames: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				],
				firstDay: 1
			},
			parentEl: '.vf-calendar-single',
			startDate: '20/8/2021'
		},
		function (start, end, label) {
			console.log('start: ', start)
			console.log('end: ', end)
		}
	)

	//Add Calendar icon
	$('[class^=vf-calendar]')
		.find('input')
		.each(function () {
			$(
				'<div class="vf-input-tooltip-icon vf-icon-calendar"></div>'
			).insertAfter(this)
		})

	//Add classes to each cancel and apply button
	$('.vf-calendar .applyBtn').each(function () {
		$(this).addClass('vf-btn vf-btn__primary')
	})

	$('.vf-calendar .cancelBtn').each(function () {
		$(this).addClass('vf-btn  vf-btn__secondary--outline')
	})
})(jQuery)
