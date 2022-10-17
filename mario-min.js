const EeCss = /*html*/`<style> 
  @font-face { 
  font-family: "Super Mario Bros 2";
  src: url(data:font/woff2;base64,d09GMgABAAAAAB0kAAoAAAAA/VQAABzUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAoDAKg498gpcOC5ccAAE2AiQDlxgEIAWYSwcgG5q0BdwY6mHjAIixXoYogo0DFAi8PTMQbBzIxsxXy/6/JzdkiFYwdNurF8lAQmG43CpU8LTWXj/fHRbK9kaxQRMDhdEO5f2kLb3Z6OwG78CT/me9R5hOXeSbIAr8wMYaqDIdH6gVmAlkQenMHMTA9axsH2hlAq9yDrhz61LE5+Fpjfb+zM6euDZz8KwhUpJW8ZAgJCqNUC7RSGKJSN8EAAEaGpePKsd3UvuohCRgkKOEtuS4tFXprJozLIyNMXEiQsVIACrdd3630P79gP+Vub2aRZBzzj7diuX1TwaDPR4MLR5UV0k2nVGMmDiD2DOLOSalft/tGVVNkpRsHyCJb3hYsk7fyn1tmYKgbkgow++2uaUPwqMKN6er9sAWQtnCS1pAv3Iz3s/MnJ3ilLSrZObe7xDVLnB6gLDJ/EVmHeqWbQzzy71JKinworrGKpbGsGEZgf//5562f2sgDigKeNzeoVQTz+T+uLRPOrJ/8V33/muodXiAdF4SwA4FsO/3JL2V3siT9bbzznp/6d7rZTTS+I9bauuoARIa2AnogAbBUjEPZSE4/v/P9a+d5L18Jke3gKrLA8oKW1vhXibZnzIp4Uewde3KPufeTDLJTN+a94FJuArV9Z0uoKu0wMa2rsKp/r9f6wdoW+RRh+Mhh0e3i5relBzetv6a1ez5j//bxtnP9jH72L3vvaOiqqKiIiIqqqrqwX9za8MgJmFBw04M5YLJ4XnK/jvGZqtwX/rfDg6MYsoUecVC53+9Um4yFFWSQJKQ2HIBFeA9H88537EN12/fuWU15UHFE6KB/GQqMQsSMgZlQev8Q9XajVeeqHV7FBXs7mWHTn1P4MVe7s3TOsNztf6fARARkXHAqOh4kMUcFguc9o72Wlg+wuhB39wYmXnxpZM+DWtVm9rXsRoNWuyxt7tvSx1wwnWe9XW1BK81zVIz8IvcBzQw60N096Jdpz6piNpL2md0IdfFYUcCbtzE1Rw3/vD1vRrSija0pyPVL5e57HK7rtMhV3rme6XgnqGkZRI89OU3rfnl2KJSJYolegAn2MAIBtCDDoRf85/4549fkg+ubBjSdccRfPjjBbUgYcWCh4Fv//W9znSsalVWWlxUkI8bV53yy498S/J/OviSXiIpT5Ui2byNDBKIIDxX2LOQ/AP5nwR+UqS/gnJBfQWOrwSXP4mmxL6zs8k7E47UI40IwqI6xcK5TGAloix2h8GTldc5Es21iM6FKAHlovKVGW4o2ChFfJ4TUYnOgRohNplzIK+S98bxTTmaoCROdIkDJ63cZGM2UzAwpShwWJOTSoFFlPTyIMDBoJtBwVQnw4SiSle8wPKi9EK8B0VPOBI0J8ItxmlkipKFgkDXiTEeGUSAHsWjnUoKXQDdzrz21PTPK67GsWi+8pJ9LgtrsRVlZPIVBxa+CkyK1T20JkJ3I8d2W5EACVKcdd3/UZCJ6HUnkrh9vQuLcJXHFmICX8uwK/9if827T6mY2oYbmyFpBb7qDNA/YI+YfnVI9x1l1Ab2BwACNGNgBK++sppSWloTRlwgJBYXv/9Ql78U0Jm+8sBp1kW2FINpJC9wgL1xuexAPR22anaQxDqAE9TRlCTTSNGG8arxoYXmq25S9KZMy4IZ6Fzly0TY1onjomLFUcvFq0ZTLDiC63CREiQcIuxWdtpo8W3ValxwDq9TVAkkDlKZp9d9NqxJA/tnQlKAdzmEV1j8+CLl1e1zOtBfK0YGbG8qT3ohiz9kJsMmSjWTEzR31Q3ZZ+xx+waglrheHHHBOUjlt3exREwLdQCQGoq2kWxd4MoNlwLNXbe6IxF1M2npaZZEyIpUdmJSBHeYl6aWsBwSedhRW1/6tP6z0WBiwcU+sIzLw+SAs9/29rTifjmWesr9xchMILlELzNNNHTiDNmHLmzs6rIh7uWxJyii9GW21dmxarLQ9Iak41+iC3ngMLZCxfUJ1wFS9gsme2xce30BQnBheQeczFg8FE0dNEDXR82wdXC6JsQ47abPuS+YIltGSh+PIlxKOMeKgtLDe1ikToMp51V5pQaJrmU8a8ZrS3Tg55mhhLdGbzHFojgCU2CH58foyy+oBP8Z+BU58mLl2+Wn/z/+/Ss54P3Lb/H33/rD+QHbEIViWthFWrrsWVAVJoNZVG2os1t+iVicACa6NgyZPqU4858fvQxOLpQFDiPh7OqCNj1XKOcFgMA3TKCRTwZKgY2ib0OznmB1QlRT2nuKwieSQaQ+Qs7OaltgjyrpYDf6DWchvYvD2g6TPpzARjnudSZDpj9EXmBiSQ+QSrF0x2nJTXfVM2zg2N8jdedlWi1dUzuOg0sCBYk6K0qhtQwotTKLnm2CuVDZKY+YJMsgdJ5edmtta+cua+82vK4xnjvAeA9Lw/tTRlSS01VeUTGShdtYOfy2Ggen0UoeTM+GYz4wrYelibG0lXXfNex7uE89M7l5ipdXE7E0CH6s7beHkTyciFqff73s78mVB9W4yeQaBaWQ2xO6qcSO88G9OEcgIcAEU43D3DQUVfoDnF4AVOECDByTvrVT/6jv6uwK4FdQiqcTOlwcKckzQ0EnSlCEVkxs2ae0JV4Y6HWUYnDI6GqVspCxNm5m2+gamBi6ETfzqnTZbuPAH3LEDhctc/4B16GUPbYddEWI6r3ZJMv2poCy5v/6fOHnChTQx0aacBXV+k8JWOiVMwSYdYVry+U90ySm1vOD7cjS3ohQ7Eh9ZMCEmpSXDEmSRXyrGKprlgCiayYeYar/DVcszbuetQyB7K6aKPqMSpKNqH4wpUxzoxOZ3OEeVRi/OujDGqO5MKbW7j9sHhhw3dMy2EzdSXvWRwOhsDfH8Gu3VsgVH3Njg+yiPyktx2NJmZTh+5qLd02+KGVq2gS3TosNFAI0byLYXAA/DW1HuZ6FMtbs1I8uHeFhuagMQOZQFCaD+yUuG5sT99EHYoXCRPzPZq3aW21PQX4rR/05weY3gxDQ/QMNZXfJTgQcBz5qR0W2koRbdaEfrlBWA7q9d1ZM5lgFTPSBFQbAO8ftVnCKJUFiYBxvRxug81JGomwPuaaC8NcjxF4J5YiVPYrn5qjKRJyY7wMRknLsw0qOLdNEd2/bN0JxsdeKCr0Bwa8hZ+UpirL7k/m5NnNLw90DcYiQvPH8CzTgUH2FtWj7sBT7C6CjvX2hFV1XnRUusVtT7YfEjYB2DiCe7WClcLhSKvBOqvYyaoddHrHgSvI1b1uysPOwOHLOga3qxnW1aFEjhYQxrzQU4rXB7Nu5vVyiU+4CQF2zdHg/8XqrBF7P6tiobfXFf0uyBogGDdTFWm6Vr1uV+ZfMHiaotvf/I2mD8hTIFRbRqOccdL7LtICxMN/56YOFzfWYWcCdJyI1GyGpA1soE2JXivFVZBknP6v3VTFaxK9PbPTZ6jDaggGFMMMx7e+o9M19PlT0jQaNhB2nyrPMDaftDLRK3BaOSIhykY/Ss9sKn0gRnI3HmFRaKBV3m3Q1eVqd9Ux2S5K0p0NdR0U4mxDUFQw5F8yfHyD8/BeUP8RafjiGccoQDGyP5wMWVJlzqqqvaTgPQGrW03YOd0pRkCdpEWUm3qgU5Zedb+jyyWYToZDmMJsBijd9b8h/VlMaPLIecyL20nLg3XBsQfL0izh4uiNSnAbhHK3kr/nY88+58Cv7GpaVy05Apcw10R/iIJfTTv3MiY6oe4nlMuJVgnvqnrhdPdpTTXlOrKyww2HIg+fZlXyE2lF1mIwAr1t/GYRlKpetASYU6uGEBvmCQmB8io+QNGah9SSvXkelWCSy6tfmRfTtZfJgNj/zAOsBTMWo5aprNKwHQJpQNoiRpNUeRTr11GKKaLU7Yad9ClpyMtLS9da4GgiHaEhMR1OWnjn1sZVAL1jsbuNhvyecYeejFBgqKmFI90pQKsOzRbkrgleqRaycZm0YE2Nh3xOK5GcjZOemoNY79X3q32HxcMPYCQBdeUdXjgfDvbOTnrNbHodvbOujgOsLurX6/Q3FK8Va9ljze7k6gptgi/Um5fUx8+jYbOamp+d9zLJZ+WuZ8EV5TJZFgxOdp5nE3qKISng6UdN6jTnWSYhLHdav3qK/cEWjA1rFYNwKUFzJwHPpbZ+XCNF4hlc+y7wefFB20pX5xb3ASZ1NtLFW4EWFlQOul/L7PayX3MNkbwkVNfWm9RMhl6x+vJVU9BJqjCTfBL3aOion1zrPvOuS1RTW9D4utxorqnEu/i5ZJescw66tnEptBzN51gR3Usf6FwEXTdhw4eXyA0TelAkRVlhMSyidOqDGEqT8BCaTrlxJLB0Nj6yrobbpq0CviAEmOX05IM8uhbJrazUw/jIHaye2CoVoe3SR4BrIAZEujGC81Z4Lrg9OUP57ToBWwu2n7f1xBNCy/7riBMtOq3rDZlPv/FL0pTxNrZU0pUuBl22pDukmRYrbWqi11wO6SpZS6RpBAMk1E6tYzh71DDTeIYINZDT7azi/UC4/XfI503Gaq1OCarzu5k5Q3U6u6PIDOTa4nsZD23M+07TwWtP8KEiF4PD0LFaDQkJFvVhwWh+ewCfb7V6tNmU5o5rKez/cjbnGxxa4mcAUZVYLbb8RhkztL+2xl9A9hMqFkQUBvv0Dfe1YnGSFqtYZoWVyFIpxa6yrRp91oivsz25X+WCra/jZyllW9tMaXINOI9DgosmFPT4fzpFgDvBy0Sx3JqnvbAunvZSSrRX4kM+Qd3RbbQfpULFSVBVXQnrwOFhbgHLQl3wPrO5CUfsg2n08DUncV2vAgQZ3J95rpk1Uy+DAliP1a356pzSbs+xr1CZPEr471LrJgOQ6pihjkzbTkCiq3W7PS/vQrp57YIM7xZ4HiV2LxBYmmf37CZ39TcEjolehecvPHpcFYxVcncYzvbWpv46Qw3Xdzh5HusMlnS1CY/fbFjCLpl3OFfIT+amzh3WP7zScnb/XDKK/Ip0W9lfmLDc66NY9bl2sWi5okoKnt4rDulYU/o81h50Dz6MJeelpmQ/9J9Lo6t7lemS9UO2CLBvzCMohtTMp7EBAHoD3TMe44OgB/07o/U3Z38WZr9nDsW0vu7rq2Im8tdmGybTTrXOKN4ZbLr+x3nQeCqxC6hRLnSbZ4EBbZfjDXaOo/dmuifiIM8F70i+qXSv81L/2F8Qx+eQu0+rGToNQpma8sxAkZhGeXc5DVmgTXs9EoSyEpnh1YbdxYt61Qw2GwXfTGOdTTat4F9UeG0BseG8Ql8tOiPETPpW9xyY8hhN4O+UCRvcOsr4Nynw3xcmU83i2hk7zKtFCmdShrY/soaqyDRFisgEKIqb7e0aGQ+PfAJN62pk99K5hRMZwUGg2oJx9YeMNeE4D7dQJy3UM8J7NVSlonVGZrtTcMJrM8gGuw6BnN3lYUHO2sn63jRe7S7fd7HPTfNmh7ouHnLQNWMKbm/YkijsSL5O1ofUyAQmIW1Az55io+BFLBaVzcKw8sGJ5FUV8Wfj1My2XVpaytINNo/W04mbCPimqWzjoOs7+m5LfC5gUD+5XIeXcE8IcOXUWvKfPEbgveYn386Po4E2WbdBZscojiN2xLuuGFp2ENFbGF5yD/1zYpZU4M7ESnKGA2uBrz+dvUnmrKD6my4pSpO7w7X6GlBKAav5O8MgN9v4+HOp73ZSJeRoz5ntL/IwSi8c6VE4MXT9sz3afrHZ4s7LvxQpZx2Jaof/S4Ll+4bVmeeAns/quaDv1LcOckhAnTt0tZhUSE4e+1US4giVOCnxc4antczMbt2+aBzeI13C8Iad0AoD6U8BeBoEGoEg9T6i8PFyDiigEQaRmJIQlPBYdHIkeiWuVCM8oGM5oaA2QmlhSEk1JiJvEsIGTxo3iOMo/0kRPFBRUxRThtbOdkx0yWZPsrnAz4clvaVvSb9s5rcAp+V7By4kf6JMff318Ea6Ijive3fXx8mH244vZbWqRk/3zY2gr23KkqeKkklUtVRViJzpSQLLG1HInvBsC+KDakXuTwisYZ5l40775dJWrEjjZpl7uD/FphXK8WCV37Nr3VQqi/VvwBivfglRgIuM3zp6zFoIchFctfuDiWIvtw8BCq89hMoqzI7zk5aMqFF9KvUi2kJmI69ZuIGrZ4rRdKf3bqxPMh1Umxzrg+jJI9vZSey4ozPMJq1PhZC38UcJorii4Y6riWW71mCg1qgEZJkfDN2NaeDtV4+z2JezzqKNrHCbydEVxXIERvzdFIU4KN70nfE/QAK/vSRKp1t33JYbXKWYrcb6BfmMq8tgX8+wf51pF6s0A/L1/BZ6rKon88USd5FQnVSGMqoqkrQgBPavUvyoDkAGSySQ0rmQ9e1fOQmMvhRUUf0F0kS2Uo5hwhyXvYihRSQuyNuJSARq60SGrWuyNhu5XG0n6RAb8W85lqdy5mtIo/ojYgXJntOBmtgOW3oPL7Mpc1LDCPA8rd1BoUToRk889m0TS0AscXFt1pijfwhlohHTHUyve6pEpidmrtBI/LqVWJvrLVwKTCw2NjScoK8jzVyXK+vmlRQP4bBXaAPhdqaRBaiJvIEK0p7IimpCHvjgKG6C0lDItFQMnWqrxhsD6AbqosaCABUmy61C/UrqpCaMkwRmOSzSWk0W44WFaogJC7san8r7YBrbLiYnaDdgOwJHXgRPZR4DkNmUnCHyn4jtdBlRUk/13RyV56AH9XzqlhKjUKX8bNNZPYSlTHSIIy1qlN8EvlO6jZVtNHhKFXKgXoqr3vLOz1Gsrv5SrfBzUEUfjeoOS2KkB60R1sKC/Gv7uK72+dDdExW6FNPe87yqw1LICQkKyZ0Wp30HVuh1oMVDbyk1ha7xaWSJt7hQGawGevzYqsTut97x0C24YgHmL4mNl8O2DvYusCkaVa43Uw6nRtIpGCq42vDsjgQgZixUgtoF3pE6R2vQB8kSf7lS2lVqnko5fqRdVyZ7WLerIiAc3+9eJ4lUuFZS/Cxbq8+sxqgIXRZ4z6M6G0KLbr1COTigC9KZEjhfAvYqmlq9DUy7T67YnTBsca4iEhtZBKlp4CiwjNuxjp0N2ieHUVNEBMmccKemeO2lzdh8Jfx5V6FAUqsCQYHMmIvzpIttXYFVUQ9sAWTWrX0VmuZawJw8KwJqQs1SALlpBiR9HpQq6RlbYpjvvRJLVEVJUHx7sY4CTDCdSSYLSmOgerHcr9q9eQj95Uy5+EtiJ6edKLCSiLTZ8VxkuXqHgD4TKAvRlJjjpQ3BecviMlBWN0ZMmPTkMuMaqTHfKaorGUdd3AZomGTD0MCIkZEyH0TqGfwrFVZesuGzH1FiThJyyGWG1H4EBH7KRNKYmvKvGWAnjyWe0tUALCFFS07J/jMIKrjaq3iHPmdW+RXsv14c9Mop6NpXpy10I7DUcpCvS2/IVBrKp3CHNsh6sL70AmFylq603FpoJlycB4/dzRqq0rEcnfGp9Vn0knVPYWITVBpQt78aBoqPh64itgDZN1b/SGzKvxBtTaibyIiNcRSSu+6envqdVVYFYEq1+tx+tVLo8jG50BZt9lM+y6aM6Ok+YTtETpciB0k/WfSFOqySAbjtSpE/7hMsFIFDwrA6pae/Wj4NYD1TrD8JgxoVYOQLreVyc3ANDSeBpdwIR342LSsPUvwsPFF5oURZY1YILSr1WcTDnaqkHp0JH1PtGKrdStUFk5It7fenrzgwlKOn2qEbyz7OM2NXpFmoRuew7UviUZi3tubKvkNR5Oiq2RTITpxTbmskW917jJaDm8TX2Wcy/Zkoi+ouJ2rIf9x+23tM2GybL61CYxCxFSPq8exEIkYT9ni4WYtw1VuXVUEGJKFdK05/79QBSW6WadXucStMcjiztImzidFDTuhqlUxg/9HclUpXDN+cqkfXKnC1k5AfKcck8li/5rZSZSef+EF0sdh6tl+IbCehFpYq+WG9STDzIW4P1IIJ917qZTnKj/XrK9LBTl8gsb3bQvpuZl9np80bIBUb6MtthuyJvlzkr/LEHJX33kcorX33QtZ46pitlvmdzU0ST5RRh4CuDl5xHnMtkaglct5cCOc/t6+DJgbLWW7UKwUudp1A4nsYwO0dl6/gy8qWxk/3ty+VDH7TL8poKEjGTTjCUzGrATlHig3Ujt94a63Yrlbsbrl8KkdljjOkhVDY94yaOlUbWJ2sfF95cg5T7F9kKglELGE2BKKRZFSQ3vs03iC1jQS8j9jIsM2A5/7HKQI83su9ZhU9iHaGVQfYExWcbZbnm5gS35FPEpz2lyZD3127E6x2mQmK0xY2XqtOuLN9bxPwU/w0Jl6yyOz7q5MocM9XyaJ8gBXuPnRaRsa4u4UHthaU5L2MmJpGivblWW1AGc9dEH7RCIFojT3/dSaW7Epmj4ugq7/U42FdQ2iyD2st/vzVMVAWDg+Bo+Z7Ue2y5y81G0K1gE3KIP7ZDk+WPurufn2Q70McftOB/rPDo9/cv14pPRS95rQZN98I39/LqvCDlZYxUxu5CvBCMns+qfBbPhB5WjX31o8H+s6i6VqqtKkQBTQQppUyRgbVT5ddt7YbaX/VPuXjatTP/3zCsKmFIwlJa+TyEi+y2xuCzmC7+4OXL//P8k6zs9ouf6qp7VDx5GR3t+0EQxflobP+h0vWl6PxUhDbQ6z5/VNbDIO4KLfxsB7l+vf9F6Gc96WdnVmvk+cl8Ptm+7MeHzUO+8+vxwR/GPEoa8NkkLb4sya7gq6lM+GeKjmgxtYHAmRYbwTKthkNp2nTGfdMeN5g2HW6mbdPpNENNl7ksWjRgLTs/Q9CZn8qiaiOeTB8zYbkQTdJdjpZkFshNZbckTDFcxpfUcLBrWtwrj6bVZi00bUZrj2lP726J6fCmDWk6PWjrN10ut1NlLx9wq93yEYLR9vmbNt3Q3pFUDCxoeOnqejjQCR73Oh37bf+ZL7U0HrzefN1mK/WO9ZHjC80IF0PXC4/+dE+yJi8ToEMYZ4nUjBKtpZnA5iM7hX610vNlwP6vFg4HUpv3VeEz+gd7uI0D33fKVv0cvlfmkDP02gFS9aI5D70A0URN1EP4jn/4iwY0h8ngGWBgLHiEKEc0xAtrqE334Qk8FblCgbq/88VH8P714Lg5fbAbBmo5tIqDS3AB56PW1gPDe32iOj0X9t1WgjbLn/Xv3sEu9RD3L16nV/KEEKnl/cK9KAr2xkxono7YJxdhFB6ggxroIvbjzn53qh8vK9yAr6VXshgVb/Eqa9SbXjUMQrh5+y2aJU+7FXvU/PM5Ek061AZyWVqohtAnA6CCX/Tbz7ws8//k5GTqitQY0jKJlAW+pYQ/Uil2yanVhgAWqAe2mqkvLpcQ2+AFyd2XAHtNTTK8n/2rG192gb5UhkmBjAEowhA4INWguakLGkNwArhSwmzEiErgp3SbeGke5KEDmsaybMCnmiCCvNnkJ1oN45AvOc7dt4z6bdAcxvIwUgVgqcas+kbKTT996IE9WDtUM/gVv/K2AtjHPsHLEk5ZHT8KxCTgxeXfZGAbmVwSYuoBzg3RDZFA7paTG3yRRBsEAEpWrvK5kCuJQ1nE9chkiVLtKJTKWAmDPqIq4+C8ZEOTiVlSktstVwm+kkThMw+YlRg0LJfmcPrAY41TDzZv3LmmIPi3F4jKEnABagzo26yrp1JG48gxky+C09o6SOc/vPwso8B9kUyPcaaFNlXapRwg/LcCy5/MZkNqKnmJsB+JOO+96qSV3g5hYNaOuiR0AJ385ldO5PpYx76uiK0xd/Z30ZiWwa9AjlyV40rXbSYzpeBn+iyq7wu3GdHLAWX7ewLFIZhCphb0R8SKU58DrSe5MvagMrR8Y4AmMxfZB7Y940p5zdy/xMmeWe7kIDIFAAA=);
}
.character {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgAgMAAAD4XRf/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTEHYPQAAAPy1qCNymdgAAAABdFJOUwBA5thmAAABS0lEQVQoz73SMWrDMBTGcaFNziW6OCQuJKexSJzFY0mgZ9AlLApdtKQoLxCvoQX7Kl6aIUO6hgxSv2eH0BPU8PPwx9jWk4T4t0v6v/wQp/quYGGIlf5riDIn19NkoOmjKsjfOTgMcROc2kSn6t7woay+MJO1X8z2cV5fHJshzh5xH6+sqWMHpyH+tFfWNrGDk5AkxCjU3Sjsz/Nb7ZmY5kbI9mzAJZEMvIkqL0VSh54cLGS+LIVae5ECfnwCpdSIKWaQrounVNsGjMp3eGoVTdXaY7WrDuCUDkO08ftow/YVSrWKDqMMDtG9x90LwxyOItPUbdvP7jk2RyabcBUJ3boMktBYJokcIrkMUiLN1BI7gGjAfyCwNL/HMZG1CLaPBdZOJMaUIciCTXNCxPpTrxbWCM/wft7NhVBalRPMliXEhwI3SdI8Dgw+9AspBeVZWNT6gwAAAABJRU5ErkJggg==');
background-size:cover;
display:block;
position:absolute;
width:1em;
height:2em;
font-size:1em;
z-index:1;
transition:transform 40ms;
}
.character.host {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgAgMAAAD4XRf/AAAADFBMVEUAAAAAAAC7Hgr8tagI6OY0AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAFMSURBVCjPvdIxasMwFMZxabCydqhTYgi5io6gQS+hgeClUOQ5pZPxFTw0ZOoWJ8in8ZIhhdBLJKNQv2eHkBPU8PPwx9jWk4T4t0vaR3aIY3/TsDDEwj8aomzJ9DxpKPuoGrI3BlZD3AajttGovDd8KM3PTKfVJ3N9nOVnw6aI03tcxAsr89jBaYi/1YVVZezgJCQJMQp5NwqL4+yaWybGrRayOmowSSQNb6Joa5HkoScHO9nua6E2VmSAH3+GWnrEDDPINs1T5l0JWrVzPHWIuqjcupgXKzDKhyG6+LN2YfkNtTpEg1EGg2je4/yLYQ5rkXrqltVH9xLLNZNluIiErl0KSSgdk0QGkUwKGZFnao8dQNRgXxFY1t7ihMg5BNfHBmsnEhNKEWTDxi0hYv2ZVTunhWV4P+/mTiiv6mfMliXEhwI3SVLfDww+9AcLBL0I9xkDFAAAAABJRU5ErkJggg==');}
.debug-game{font-size:14px;display:flex;flex-direction:column;position:fixed;top:0;left:0;padding:1em;z-index: 2;}
.character.peer{transition:transform 50ms;}
.champ {background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTP+bOx6EFf///4C0fXYAAAABdFJOUwBA5thmAAAASUlEQVQIHQXBsQ2CYBQGwOPLs4fOOM0fJ4CCfRiGPWQZaVjAggh3PEbRP0V7S8dSZdszjEelijSmoHKetm6G1+e/cl3CTyDa1w3ybw7Wo9ISXQAAAABJRU5ErkJggg=='); animation:spawn 200ms}
#ground * {background-size:cover}
.character.mini {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQAgMAAADbiZG6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTEHYPQAAAPy1qCNymdgAAAABdFJOUwBA5thmAAAAsUlEQVQY0zXPMQ7CMAwF0K9shXMUQRdOQ9RmyswJGH2JRoipC1Lw0hVVglyDsXsHJtaCDSHSs74tRZaB/6s6FaXEX9M6ErMEq4HMbufFHTl40w8kjsiBllMaxQM5iKfSwTeMJjGJDjnIN1nQv72UGdoUTUMKxtXYOEeVtVGhsAE3G3wKU1AyYCTHh3Riq2DmAVuerivmWsG89ljwxbfSKLmlRslnH5g6BXBE6Vtay9HqA7L2bkgxJZbtAAAAAElFTkSuQmCC'); height:1em}
.character.mini.host {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQAgMAAADbiZG6AAAADFBMVEUAAAAAAAC7Hgr8tagI6OY0AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAACzSURBVBjTNc8xDsIwDAXQn4FyAUCiC1fxETrEDCxdYEhnOkKukIUbNJXSmYN068jCKZAqsCFEeta3pcgy8H/rSlkp9tc0kcQsIWkgMwxBXJBDMHVL4ogcaDn5UTyRg3goHXzDaDyTqJCDfJMF9TtImaFN0fekYGKHTYy0TskqFMnhmlzwbnJKBgwf+e5PnBTM3GLH03nL3CmY1w0L3odGGiW3dCj5EBxTpQC2KENDKzlafQCUyl1s1UuG8AAAAABJRU5ErkJggg==');}
#ground i,#ground b,#ground .character,#ground d,#ground o {image-rendering:pixelated}
.character.peer.nolinear{transition:transform 40ms;}
/*#character.onHead{transition:transform none;}*/
.bloc1 {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAAQDcXhuUzbUSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAfSURBVAjXYxANDQ1hyFq1aiVD2qpVMyEskgiENpBRAIvXI6FLui2sAAAAAElFTkSuQmCC')}
.brick {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAGUExURcRVHQMDA838lrQAAAAXSURBVAjXY2RkYGIAIcb/DIwCSGwc4gBVagQ3EPBgcgAAAABJRU5ErkJggg==')}
.piece {animation:walk .8s infinite steps(1, end);background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQBAMAAACigOGCAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYUExURUdwTAQCBIwWBORiFfyWOcRKDMxLDPSSNRcG8OwAAAABdFJOUwBA5thmAAAAX0lEQVQY02NgwA1YXBwFQDSzsSGYZlJSBNMMLi4ugiDa2NgYTCspKQlCJMLQJFwgEiyuLiIgs5iNjYVBZjGpKAmBzaKmhBvt7FCHSjC4CEI9KAj1oCDM57iCBGcgYgcAnXYcZbe+4qUAAAAASUVORK5CYII=')}
.guess {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExUReOHK/+xKwAAAAMDA81ONYEAAAA+SURBVAjXYzjAwMDMIBoaGs4gGxpaziDqwBrOIMrVCCQ4nWBEJhOQCNECEapAInQpiCUK5cqGLi2HGPAfCABU+xKUfHpTTwAAAABJRU5ErkJggg==')}
#ground .castleA,#ground .castleB {
    content: "";
    width: 5em;
    height: 5em;
    display: inline-block;
    background-size: 5em;
    image-rendering: pixelated;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAACVBMVEVHcEwAAQDcXhsBxVVBAAAAAXRSTlMAQObYZgAAAJlJREFUOMvtkmEKgCAMhUd3fEJH6EAdoR/ulLVCnbhKhYigFxP6nPOBj2gT08ChKOhd6JgRKnX69HVAKEWoGrkDmjPZA9Imawc88QnIzbJ2wM/63JPhOZWkpBFCpSlCrTbo8olHRnXiYvLqIQyR0cgN0JwZt2dXWtredyrgAox1PmfAFZZMKMfqfMpPYekeXvrMbq+Hv8/nfa4ma73VqErcDAAAAABJRU5ErkJggg==);
}
#ground .castleB {
    z-index: 99;
    background-position-y: bottom;
    background-position-x: -3em;
    width: 2em;
    height: 3em;
    position: relative;
}
.castle{
  width:5em;height:5em;
}
#ground .pipe {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwAgMAAAANwpD8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTAUFBYPTEwCrAALXRhQAAAABdFJOUwBA5thmAAAAQUlEQVQY02MIhQKGrFVgsJKh/teq/0DwlyHr16rX//+/ewll/F5JfRG47awQOoCBbf2qXf//75oAZbybMCqCLAIAnmMNGaCNw9cAAAAASUVORK5CYII='); width:2em; height:3em}
#ground b.pipeA {
  width:2em; height:1em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQAgMAAAAKbpXKAAAADFBMVEVHcEwFBQWD0xMAqwAC10YUAAAAAXRSTlMAQObYZgAAAC9JREFUCNdjCIUChqxVYLCSof7Xqv9A8Jch69eq1///v3sJZfxeSX0RuO2sEDoAAPf/XaqJnTVZAAAAAElFTkSuQmCC");
}
#ground b.pipeB {
  width:2em; height:1em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQAgMAAAAKbpXKAAAADFBMVEVHcEwFBQWD0xMAqwAC10YUAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYFu/atf//7smMEAY72CMARIBAHYQV7Ho5GKqAAAAAElFTkSuQmCC");
}
#ground d{
  z-index:-1;
  filter: blur(2px);
  position: absolute;
}
#ground .mountain1,#ground .mountain2{
  width:3em; height:3em;
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwAgMAAACkmpotAAAACVBMVEVHcEwAqAAAAABWPN3EAAAAAXRSTlMAQObYZgAAANBJREFUOMvtkTEKwzAMAEM39x9e+h8J0UlLhvzCn9CepdD8solIsGwZdS5UgxDohoObpv/8+Dze8f8uuIbAC+AZ/W8AMJcASDuwcQDkA6AAkAPAWGHZoIQKywwcKiwAFCrsAEYKOiVQ0OFAQYcCBR38otBImP6pAjzsnytAw/5SARz111vfc5Ww/fVWYKsStn+2AA36iwXQ9z/vaxfX/7yvza7/eV+bXH9pAez7mxA1h+2feoC7/rkHqOsvPYBtf6dwSNj+yQPc9M8eoKa/eAA/0uPFFdvHrH0AAAAASUVORK5CYII=');
}
#ground .mountain2{
  width:5em;
  background-position-x:-3em;
}
#ground .flower1,#ground .flower2,#ground .flower3{
  width:2em; height:1em;
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAQBAMAAAAL2OtTAAAAD1BMVEVHcEyA0BAAAAAAqAAAqwCWPr85AAAAAXRSTlMAQObYZgAAAKFJREFUOMutkssRwzAIBTEdPJwCQB2ohPTfVA62RgJ9uES33fUw+pjoWaWQW40zHzsDuuLMT90AWXDmYycDIDxz5mMnAwDTiTMfOxlwj5tsfPCfVWfcFbWLxkf/nTsZKjBMbpz50LngXcqeM+/7c2OPMHWced+5C4E6zrzrdLnZ6jnzQ2e3YxFenmDne48nl833cpzz/lP/GcTxJXcvfB6kP8XSPTg3uQtiAAAAAElFTkSuQmCC');
}
#ground .flower2{
  width:3em;
  background-position-x:-2em;
}
#ground .flower3{
  width:4em;
  background-position-x:-5em;
}
.walk {animation:walk 400ms infinite steps(1, end)}
.walk.mini {animation-duration:300ms}
.jump {background-position-x:-3em;animation:none}
.snip {background-position-x:-4em;animation:none}
.enterPipe {animation:enterPipe 2s forwards}
@keyframes enterPipe {
    from {margin-bottom:0}
    to {margin-bottom:-2em}
}
@keyframes spawn {
    from {opacity:0;transform:translateY(100%)}
      to {opacity:1;transform:translateY(0)}
}
@keyframes walk {
    0% {background-position-x:-1em}
    25% {background-position-x:-2em}
    50% {background-position-x:-1em}
    75% {background-position-x:0em}
}
@keyframes bump {
    0% {margin-bottom:0}
    70% {margin-bottom:.2em}
    100% {margin-bottom:0}
}
#ground i {content:"O"; display:block; width:1em; height:1em; position:absolute;}
.bump {animation:bump 100ms}
#ground b {display:block;width:1em;height:1em;position:absolute;z-index:2}
#ground o {position: absolute;}
#ground {
    position: absolute;
    color: white;
    font-size: 32px;
    top: 0;
    bottom: 0;
    min-width: 100%;
    width: 100%;
    display: flex;
    align-items: self-end;
    transition: transform 80ms;
    /* pointer-events: none; */
    overflow: hidden;
    z-index: 1;
}
#ground:before {
    content: "";
    z-index: -1;
    background: #7dbbf1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
#gameView {
    position: absolute;
    font-family:"Super Mario Bros 2",monospace;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
body{
  overflow: hidden;
  user-select: none;
  background: #7dbbf1;
}
body *{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}
.buttons{
  position: fixed;
  z-index: 6;
  display:flex;
}
.buttons.br{
  bottom: 0.3em;
  right: 0.3em;
}
.buttons.tl{
  top: 0.3em;
  left: 0.3em;
  display:flex;
  flex-direction: column;
}
.buttons .btn-game{
  touch-action: none;
  color:white;
  font-size:30px;
  width:4em;
  height:4em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius:4em;
  margin:.3em;
  background:red;
  opacity:.4;
}
#gameView.safari *{
    transition: none!important;
}
@media (min-device-width:768px){
  .buttons{
      display:none!important;
  }
}
  </style>`;
/*
{ box: [0, 4] },
  { box: [1, 4] },
  { box: [2, 4] },
  { box: [8, 2] },
  */
const jsonMap = [[
  { "piece": [9, 1] },
  { "piece": [8, 1] },
  { "piece": [4, 0] },
  { "piece": [11, 3] },
  { "piece": [1, 5] },
  { "piece": [2, 5] },
  { "box": [2, 3] },
  { "box": [8, 2] },
  { "box": [7, 0] },
  { "box": [10, 2] },
  { "box": [11, 2] },
  { "box": [13, 3] },
  { "box": [13, 4] },
  { "box": [13, 5] },
  { "box": [13, 6] },
  { "brick": [13, 2] },
  { "brick": [14, 2] },
  { "brick": [15, 2] },
  { "guess": [12, 2] },
  { "pipeA": [16, 1] }
]];

const { createApp } = Vue;
const EeIDElement = "body";
const EeElement = document.querySelector(EeIDElement);
const EeGameView = document.createElement("div");
EeGameView.setAttribute("id", "gameView");
EeGameView.innerHTML =
  `<div class="debug-game"><div v-if="false">{{playersList}} - {{minimumJump}}</div>
  <div v-if="classCharacter.host">HOST</div>
  <div>{{Object.keys(playersList).length+1}} Player{{Object.keys(playersList).length?"s":""}}</div>
  </div>` +
  "<div class='buttons tl'><span class='btn-game' @touchstart='moveY=-1' @touchend='moveY=0'>up</span><span class='btn-game' v-show='characterTall' @touchstart='moveY=1' @touchend='moveY=0'>down</span></div>"+
  "<div class='buttons br'><span class='btn-game' @touchstart='moveX=-1' @touchend='moveX=0'><</span><span class='btn-game' @touchstart='moveX=1' @touchend='moveX=0'>></span></div>"+
  '<div id="ground">' +
  '<span id="character" :class="\'character \'+characterClass"></span>' +
  "<span :id=\"ID\" v-for=\"(player,ID) in playersList\" :key=\"ID\" :class=\"'character peer '+player.classPlayer\" :style=\"'transform:translate('+player.x+'em,'+(-player.y)+'em)'+player.mirror\"></span>";
EeElement.style.position = "relative";
document.body.style.minHeight = "100%";
document.body.insertAdjacentHTML("beforeend", EeCss);
EeElement.appendChild(EeGameView);
var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') == -1) {
    EeGameView.classList.add('safari')
  }
}


const app = createApp({
  data() {
    return {
      defaultGridSize: 42,
      scaleRatio: 1,
      jsonMap,
      posCamX:0,
      posX: 40,
      posY: 0,
      moveX: 0,
      moveY: 0,
      vMaxX: 7,
      vMaxJump: 8.8,
      vMaxGravity: 7,
      onFloor: false,
      onJump: false,
      minimumJump:false,
      canJump: true,
      character: null,
      characterMirrored:false,
      classCharacter: { mini: true },
      characterTall: false,
      playersList: {},
      ground: null,
      started: false,
      deltaLag: 1,
      timeFrame: Date.now(),
      nbItem: 0,
      noControl: false,
      webRTC: {},
      senderChannels: {},
      receiveChannels: {},
      multiplayer: new Multiplayer(),
      onPeerHead:false,
      PeerHeadLag:0,
      mapSize:6,
    };
  },
  watch: {
    noControl(bool) {
      if (bool) {
        this.classCharacter.enterPipe = true;
        this.moveY = 0;
        this.moveX = 0;
      }
    },
    posCamX(){
      this.ground.style.transform=`translateX(${this.posCamX}px)`;
    },
    posX(px) {
      if(px>(document.body.clientWidth/1.8 - this.posCamX)){
        let pcx=document.body.clientWidth/1.8 - px
        if(-pcx<(this.ground.clientWidth-document.body.clientWidth)){
          this.posCamX=pcx;
        }
      }else{
        if(this.posCamX<0 && px<(document.body.clientWidth/4 - this.posCamX)){
          let pcx=document.body.clientWidth/4 - px
          if(pcx>0) pcx=0;
          this.posCamX=pcx;
        }
      }
      this.updatePos();
    },
    posY() {
      this.updatePos();
    },
    started(bool) {
      if (bool) {
        this.timeFrame = Date.now();
        this.refresh();
      }
    },
    minimumJump(bool){
      if(!this.moveY && bool){
        this.stopJump();
      }
    },
    moveY(val) {
      if (this.noControl) {
        if(this.classCharacter.enterPipe && val===-1){
          delete this.classCharacter.enterPipe
          this.noControl=false;
          this.jump();
        }
        this.moveY = 0;
        return;
      }
      if (val === 1) {
        this.classCharacter.snip = true;
      } else {
        delete this.classCharacter.snip;
        if (val === -1) {
          this.jump();
        }else{
          if(this.minimumJump){
            this.stopJump();
          }
        }
      }
    },
    moveX(val) {
      if (this.noControl) {
        this.moveX = 0;
        return;
      }
      if (!val || this.moveY === 1) {
        this.moveX = 0;
        delete this.classCharacter.walk;
      } else {
        this.classCharacter.walk = true;
        if (val === -1) {
          this.classCharacter.mirror = true;
          this.characterMirrored = true;
        }
        if (val === 1) {
          delete this.classCharacter.mirror;
          this.characterMirrored = false;
        }
      }
    },
    onFloor(bool) {
      if (bool) {
        delete this.classCharacter.jump;
        this.canJump = true;
      }
    },
    characterTall(bool) {
      if (bool) {
        delete this.classCharacter.mini;
      } else {
        this.classCharacter.mini = true;
      }
    },
    onPeerHead(val){
      if(val){
        this.classCharacter.onHead=true
      }else{
        delete this.classCharacter.onHead
      }
    },
  },
  computed: {
    characterClass() {
      return Object.keys(this.classCharacter).join(" ");
    },
    onMove() {
      return this.moveY !== 1 && this.moveX;
    },
  },
  methods: {
    start() {
      this.started = true;
    },
    pause() {
      this.started = false;
    },
    updateData(data) {
      data.peer = this.multiplayer.peerID;
      for (let peer of Object.keys(this.senderChannels)) {
        if (this.senderChannels[peer].readyState == "open") {
          this.senderChannels[peer].send(JSON.stringify(data));
        }
      }
    },
    refresh() {
      this.scaleRatio = parseInt(getComputedStyle(this.ground).fontSize) / 32;
      this.deltaLag = (Date.now() - this.timeFrame) / 25;
      if (this.onMove)
        this.posX +=
          this.moveX * (this.vMaxX * this.deltaLag * this.scaleRatio);
      this.collision();
      if (!this.onJump && !this.onFloor) {
        this.falling();
      } else {
        if (this.onJump) {
          this.posY += this.vMaxJump * this.deltaLag * this.scaleRatio;
        }
      }
      let data = {
        type: "player",
        mirror:this.characterMirrored,
        x: Math.round(this.posX / (this.scaleRatio * 0.032)) / 1000,
        y: Math.round(this.posY / (this.scaleRatio * 0.032)) / 1000,
        ph:this.onPeerHead,
        classPlayer: this.characterClass,
      };
      this.updateData(data);

      this.timeFrame = Date.now();
      setTimeout(() => {
        if (this.started) this.refresh();
      }, 20);
    },
    collision() {
      const pW = this.character.clientWidth;
      const pH = this.character.clientHeight * 0.8;
      const pY = this.posY;
      const pX = this.posX;
      const doubleScaleRatio = this.scaleRatio * 2;
      this.ground.querySelectorAll(".item").forEach((item) => {
        const x = item.offsetLeft;
        const y = Math.round(
          item.offsetParent.offsetHeight - (item.offsetTop + item.offsetHeight)
        );
        const h = (item.clientHeight + pH) / 2;
        const w = (item.clientWidth);
        if (pY + pH / 2 - y < h*1.3 && pY + pH / 2 - y > -h/2) {
          if (pX - x < w - pW/2.2 && pX - x > - pW/1.5) {
            if (item.classList.contains("champ")) {
              this.characterTall = true;
            }
            this.itemRemove(item);
            return true;
          }
        }
      });
      let stillOnbox = false;
      let onPeerHead=false;
      this.PeerHeadLag-=onPeerHead?1:0;
      if (pY <= 0) stillOnbox = true;
      const walks = this.moveX ? -1 * doubleScaleRatio : 5 * doubleScaleRatio;
      this.ground.querySelectorAll(".peer").forEach((peer) => {
        let id=peer.getAttribute("id");
        if(!this.playersList[id]){
          return;
        }
        const x = this.playersList[id].x * (this.scaleRatio * 32);
        const y = this.playersList[id].y * (this.scaleRatio * 32);
        const h = peer.clientHeight / 2.2;
        //const w = peer.clientWidth;
        if (pX - x < walks+pW/2 && pX - x > -(walks+pW/2)) {
          if (!this.onJump && pY <= y + h * 2 && pY > y + h) {
            //Floor
            this.posY = y + h * 2;
            stillOnbox = true;
            this.PeerHeadLag=7;
            onPeerHead = peer.getAttribute("id");
            return;
          }else{
            if(!this.onJump){
              onPeerHead=this.PeerHeadLag>0?this.onPeerHead:false;
            }
          }
        }
      });
      this.ground.querySelectorAll("b").forEach((item) => {
        const x = item.offsetLeft;
        const y = Math.round(
          item.offsetParent.offsetHeight - (item.offsetTop + item.offsetHeight)
        );
        const h = item.clientHeight / 2;
        const w = item.clientWidth;
        if (pY < y + h * 2 && pY > y - pH) {
          if (
            pX - x < w - walks &&
            pX - x > w - this.vMaxX * doubleScaleRatio
          ) {
            //Right
            this.posX = x + w;
            return;
          }
          if (
            pX - x > -pW + walks &&
            pX - x < -pW + this.vMaxX * doubleScaleRatio
          ) {
            //Left
            this.posX = x - pW;
            return;
          }
        }
        if (pX - x < w - walks && pX - x > walks - pW) {
          if (this.onJump && pY >= y - pH && pY < y - pH + h) {
            //Up
            this.stopJump()
            this.posY = y - pH;
            if (item.classList.contains("guess")) {
              this.itemAddClass(item, "bump");
              setTimeout(() => {
                this.itemRemoveClass(item, "bump");
              }, 100);
              this.itemRemoveClass(item, "guess");
              this.itemCreate("i","champ item",item.style.left,`${parseInt(item.style.bottom) + 1}em`)
            }
            if (item.classList.contains("brick")) {
              this.itemAddClass(item, "bump");
              setTimeout(() => {
                this.itemRemove(item);
              }, 100);
            }
            return;
          }
          if (!this.onJump && pY <= y + h * 2 && pY > y + h) {
            //Floor
            if (item.classList.contains("pipeA") && this.moveY === 1) {
              this.posX = x + w / 4;
              this.noControl = true;
              delete this.classCharacter.snip;
            }
            this.posY = y + h * 2;
            stillOnbox = true;
            return;
          }
        }
      });
      this.onPeerHead=onPeerHead;
      if (this.posY > 0 && !this.onJump) {
        this.onFloor = stillOnbox;
      }
    },
    falling() {
      this.posY -= this.vMaxGravity * this.deltaLag * this.scaleRatio;
      if (this.posY < 0) {
        this.posY = 0;
        this.onFloor = true;
      }
    },
    jump() {
      if (this.canJump && !this.onJump) {
        this.canJump = false;
        this.classCharacter.jump = true;
        this.minimumJump=false;
        if(this.characterTall){
          this.onJump = setTimeout(() => {
            this.stopJump()
          }, 520);
        }else{
          this.onJump = setTimeout(() => {
            this.stopJump();
          }, 440);
        }
        setTimeout(() => {
          this.minimumJump=true;
        }, 220);
      }
    },
    stopJump(){
      clearTimeout(this.onJump);
      this.minimumJump=false;
      this.onJump = false;
      this.onFloor = false;
    },
    itemAddClass(item, value) {
      let id = item.getAttribute("id");
      item.classList.add(value);
      this.updateData({ type: "itemClassAdd", id, value });
    },
    itemRemoveClass(item, value) {
      let id = item.getAttribute("id");
      item.classList.remove(value);
      this.updateData({ type: "itemClassRemove", id, value });
    },
    itemCreate(tag,className,x,y){
      let element = document.createElement(tag);
      element.classList.value = className;
      element.style.left = x;
      element.style.bottom = y;
      element.setAttribute("id", `item${parseInt(x)}x${parseInt(y)}`);
      this.ground.appendChild(element);
      this.updateData({ type: "itemAdd", tag,className,x,y });
    },
    itemRemove(item) {
      let id = item.getAttribute("id");
      this.updateData({ type: "itemRemove", id });
      item.remove();
      
    },
    updatePos() {
      let x = Math.round(this.posX) / (this.scaleRatio * 32);
      let y = Math.round(this.posY) / (this.scaleRatio * 32);
      let mirror = (this.characterMirrored)?" scale(-1,1)":"";
      this.character.style.transform=`translate(${x}em,${-y}em)${mirror}`
      for(let peer in this.playersList){
        if(this.onPeerHead === peer){
          this.posY = (this.playersList[peer].y*(this.scaleRatio * 32)) +document.getElementById(peer).clientHeight*.9
        }
        if(this.playersList[peer].ph===this.multiplayer.peerID){
          this.playersList[peer].y=((this.posY+this.character.clientHeight*.9) / (this.scaleRatio * 32));
        }
      }
    },
    convertToObject(obj, type = "item") {
      obj.classList.add(type);
    },
    createObject(obj,offset){
      let tagItem = { piece: "i", box: "b", guess: "b", pipe: "b",'pipeA': "b",'pipeB': "b", brick: "b",castle:"o"};
      let nodeObj = null;
      let type = Object.keys(obj)[0];
      if (Object.keys(tagItem).includes(type)) {
        switch (type){
          case "castle":
            nodeObj = document.createElement(tagItem[type]);
            nodeObj.classList.value = "castleA";
            nodeObj.style.left = `${obj[type][0]+(offset*16)}em`;
            nodeObj.style.bottom = 0;
            nodeObj.setAttribute("id", `${type}${obj[type][0]+(offset*16)}x${obj[type][1]}`);
            this.ground.appendChild(nodeObj);
            nodeObj = document.createElement(tagItem[type]);
            nodeObj.classList.value = "castleB";
            nodeObj.style.left = `${obj[type][0]+(offset*16)+3}em`;
            nodeObj.style.bottom = 0;
            nodeObj.setAttribute("id", `${type}${obj[type][0]+(offset*16)}x${obj[type][1]}`);
            this.ground.appendChild(nodeObj);
            break;
          default:
            nodeObj = document.createElement(tagItem[type]);
            if (["guess", "box"].includes(type)) {
              nodeObj.classList.value = `bloc1 ${type}`;
            } else {
              nodeObj.classList.value = type;
            }
            if(tagItem[type]=='i'){
              nodeObj.classList.add('item')
            }
            nodeObj.style.left = `${obj[type][0]+(offset*16)}em`;
            nodeObj.style.bottom = `${obj[type][1]}em`;
            nodeObj.setAttribute("id", `${type}${obj[type][0]+(offset*16)}x${obj[type][1]}`);
            this.ground.appendChild(nodeObj);
            break;
        }

      }
    },
    loadMap() {
      this.ground.style.width=(this.mapSize+1)*16+'em'
      for(let i=0;i<13;i++){
        this.createObject({box:[-1,i]},0);
      }
      for(let i=0;i<this.mapSize;i++){
        let seed=Math.seed(this.jsonMap.length-1)
        for (let obj of this.jsonMap[seed]) {
          this.createObject(obj,i);
        }
      }
      this.createObject({castle:[6,0]},this.mapSize);
      this.createObject({brick:[10,0]},this.mapSize);
      this.createObject({brick:[10,1]},this.mapSize);
      this.createObject({box:[9,2]},this.mapSize);
      for(let indexDecor=Math.seed(4);indexDecor<this.mapSize*16;indexDecor++){
        let alea=Math.seed(20);
        let type="";
        switch(alea){
          case 0:
          case 5:
            type="mountain1";
            indexDecor+=3;
            break;
          case 1:
          case 15:
          type="mountain2"
          indexDecor+=4;
          break;
          case 2:
            type="flower1"
            indexDecor+=2;
            break;
          case 3:
            type="flower2"
            indexDecor+=3;
            break;
          case 4:
            type="flower3"
            indexDecor+=5;
            break;
        }
        if(type){
          nodeObj = document.createElement('d');
          nodeObj.style.left = `${indexDecor}em`;
          nodeObj.style.bottom = 0;
          nodeObj.classList.value = `decor ${type}`;
          this.ground.appendChild(nodeObj);
        }
      }
      
    },
    async receiveRTCConfig(data) {
      if (data.peerDestination == this.multiplayer.peerID) {
        console.log("RECEIVE",data);
        if (data.offer) {
          this.initRTC(data.peer);
          let responseOffer = data.offer;
          await this.webRTC[data.peer].setRemoteDescription(responseOffer);
          let answer = await this.webRTC[data.peer].createAnswer();
          await this.webRTC[data.peer].setLocalDescription(answer);
          this.multiplayer.sendData({
            action: "RTC",
            answer,
            peerDestination: data.peer,
            return: false,
          });
        }
        if (data.candidate && this.webRTC[data.peer].connectionState != "connected") {
          await this.webRTC[data.peer].addIceCandidate(data.candidate);
        }
        if (data.answer) {
          let responseAnswer = data.answer;
          await this.webRTC[data.peer].setRemoteDescription(responseAnswer);
        }
        console.log("WEBRTC",this.webRTC[data.peer])
      }
      return;
    },
    async createOffer(peerDestination) {
      console.log("Create Offer");
      let offer = await this.webRTC[peerDestination].createOffer();
      this.webRTC[peerDestination].setLocalDescription(offer);
      this.multiplayer.sendData({
        action: "RTC",
        offer,
        peerDestination,
        return: false,
      });
    },
    initRTC(peer) {
      console.log("Init Rtc");
      let servers = {
        iceServers: [
          {
            urls: ["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
          },
        ],
      };
      this.webRTC[peer] = new RTCPeerConnection(servers);
      this.webRTC[peer].ondatachannel = (event) => {
        this.receiveChannels[peer] = event.channel;
        this.receiveChannels[peer].onmessage = this.onReceiveMessageCallback;
        this.receiveChannels[peer].onopen = () => {
          console.log("OPEN RECEIVER");
        };
        this.receiveChannels[peer].onclose = () => {
          console.log("Close RECEIVER");
        };
      };
      this.senderChannels[peer] = this.webRTC[peer].createDataChannel("sender");
      this.senderChannels[peer].onopen = () => {
        console.log("open senderChannels:", peer);
      };
      this.senderChannels[peer].onclose = () => {
        console.log("close senderChannels:", peer);
        delete this.playersList[peer]
      };
      this.webRTC[peer].onicecandidate = async (event) => {
        console.log("onice",this.webRTC[peer]);
        if (event.candidate) {
          this.multiplayer.sendData({
            action: "RTC",
            candidate: event.candidate,
            peerDestination: peer,
            return: false,
          });
        }
      };
      console.log(this.webRTC[peer]);
    },
    onReceiveMessageCallback(e) {
      let data = JSON.parse(e.data);
      if (data) {
        switch (data.type) {
          case "player":
            let y =this.playersList[data.peer]?this.playersList[data.peer].y||0:0;
            this.playersList[data.peer] = {
              mirror:(data.mirror)?" scale(-1,1)":"",
              x: data.x,
              ph:data.ph,
              classPlayer: data.classPlayer,
              y:y,
            };
            if(data.ph !== this.multiplayer.peerID){
              this.playersList[data.peer].y=data.y;
            }else{
              this.playersList[data.peer].classPlayer+=" nolinear"
            }
            break;
          case "itemClassAdd":
            try {
              document.getElementById(data.id).classList.add(data.value);
            }catch(e){}
            break;
          case "itemClassRemove":
            try {
              document.getElementById(data.id).classList.remove(data.value);
            }catch(e){}
            break;
          case "itemAdd":
            let element = document.createElement(data.tag);
            element.classList.value = data.className;
            element.style.left = data.x;
            element.style.bottom = data.y;
            element.setAttribute("id", `item${parseInt(data.x)}x${parseInt(data.y)}`);
            this.ground.appendChild(element);
            break;
          case "itemRemove":
            try {
              document.getElementById(data.id).remove();
            }catch(e){
              console.error(e)
            }
            break;
        }
      }
    },
  },
  mounted() {
    let that = this;
    this.character = document.querySelector("#character");
    this.ground = document.querySelector("#ground");
    this.ground.style.fontSize = `${this.defaultGridSize}px`;
    fetch('./pattern.json')
        .then((response) => response.json())
        .then((json) => {this.jsonMap=json;this.loadMap();})
        .catch(()=>{
          this.loadMap();
        });
    document
      .querySelectorAll("#ground i")
      .forEach((obj) => this.convertToObject(obj));
    this.started = true;
    this.updatePos();
    if (this.characterTall) {
      delete this.classCharacter.mini;
    } else {
      this.classCharacter.mini = true;
    }
    document.addEventListener("keydown", (e) => {
      switch (e.key.toLowerCase()) {
        case "z":
        case "arrowup":
          that.moveY = -1;
          break;
        case "s":
        case "arrowdown":
          that.moveY = 1;
          break;
        case "q":
        case "arrowleft":
          that.moveX = -1;
          break;
        case "d":
        case "arrowright":
          that.moveX = 1;
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key.toLowerCase()) {
        case "z":
        case "arrowup":
          if (that.moveY === -1) that.moveY = 0;
          break;
        case "s":
        case "arrowdown":
          if (that.moveY === 1) that.moveY = 0;
          break;
        case "q":
        case "arrowleft":
          if (that.moveX === -1) that.moveX = 0;
          break;
        case "d":
        case "arrowright":
          if (that.moveX === 1) that.moveX = 0;
          break;
        case "p":
          this.pause();
          break;
        case "o":
          this.start();
          break;
      }
    });
    this.multiplayer.enableDebugMode();
    this.multiplayer.connect("ws://bestcombinationgame.alwaysdata.net/wss");


    this.multiplayer.onConnected = () => {
      this.multiplayer.log("peer");
    };

    this.multiplayer.onLogged = () => {
      this.multiplayer.joinRoom("mario");
      console.log(app);
    };
    this.multiplayer.onJoinedRoom = ()=>{
      if(this.multiplayer.isHost){
        this.classCharacter.host=true;
      }
    }

    this.multiplayer.onMessage = (data) => {
      console.log(that.webRTC)
      if (data.action === "RTC") {
        if (data.peerDestination == this.multiplayer.peerID) {
          this.receiveRTCConfig(data);
        }
      }
    };

    this.multiplayer.onPeerConnected = (e) => {
      if (this.multiplayer.isHost) {
        this.initRTC(e.peerID);
        this.createOffer(e.peerID);
      }
    };
  },
}).mount("#gameView");
let idSeed=60;
Math.seed = (step=-1)=>{
  let x = Math.sin(idSeed++)*Math.cos(idSeed/6)*10000;
  idSeed++;
  let res = x - Math.floor(x);
  if(step>=0){
    res =Math.round((x - Math.floor(x))*step);
  }
  return res;
}
