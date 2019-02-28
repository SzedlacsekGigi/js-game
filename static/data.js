var snippets = {"id1" : "num_list = [1, 2, 3, 4]\n" + "new_number = 0",
        "id2" : "for i in range(len(num_list)):" + "\n" + "new_number += 1",
        "id3" : "num_list.append(new_number)",
        "id4" : "return num_list"};

document.getElementById("l1").innerHTML = snippets.id1;
document.getElementById("l2").innerHTML = snippets.id2;
document.getElementById("l3").innerHTML = snippets.id3;
document.getElementById("l4").innerHTML = snippets.id4;
