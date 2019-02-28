var snippets = [{"id1" : "num_list = [1, 2, 3, 4]\n" + "new_number = 0",
        "id2" : "for i in range(len(num_list)):" + "\n" + "new_number += 1",
        "id3" : "num_list.append(new_number)",
        "id4" : "return num_list"},
        {"id1" : "első", "id2" : "második", "id3" : "harmadik", "id4" : "negyedik"}];

function loadTask(i) {
        document.getElementById("l1").innerHTML = snippets[i].id1;
        document.getElementById("l2").innerHTML = snippets[i].id2;
        document.getElementById("l3").innerHTML = snippets[i].id3;
        document.getElementById("l4").innerHTML = snippets[i].id4;
        i ++;
        return i;
}

function main() {
        loadTask(0);
}

main();