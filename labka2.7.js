function ages(persons) {
    const result = {};

    for (const person in persons) {
        result[person] = persons[person].died - persons[person].born;
    }

    return result;
}

const persons = {
    baobab: { born: 1870, died: 1924 },
    blabla: { born: 1893, died: 1976 },
    pypypy: { born: 1869, died: 1948 },
    popopo: { born: 1901, died: 1989 }
};

console.log(ages(persons));