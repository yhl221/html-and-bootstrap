function buildScore() {
    var total = 0;
    var allId = [
        'select_1_1', 'select_2_2',
        'multiply_select_1_1', 'multiply_select_1_2', 'multiply_select_1_4',
        'multiply_select_2_1', 'multiply_select_2_2', 'multiply_select_2_3',
        'true_false_1_1', 'true_false_1_1'
    ];

    var fill_first = document.getElementById('fill_1');
    if (fill_first.value === '统一建模语言')
        total = total + 5;

    var fill_second = document.getElementsByName('fill_2');
    for (var i = 0; i < fill_second.length; i++)
        if (fill_second[i].value === '封装性' || fill_second[i].value === '继承性' || fill_second[i].value === '多态性')
            total = total + 5;

    var short_answer = document.getElementById('short_answer');
    if (short_answer.value === '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。')
        total = total + 5;

    for (var i = 0; i < allId.length; i++) {
        var click = document.getElementById(allId[i]);
        if (click.checked)
            total += 5;
    }

    document.getElementById("result").value = total;
}

