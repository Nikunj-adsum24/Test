function flatten(ary, ret = []) {
    return ary.reduce((ret, entry) => {
        if (Array.isArray(entry)) {
            flatten(entry, ret);
        } else {
            ret.push(entry);
        }
        return ret;
    }, ret);
}
document.write(flatten([
    [
        [1, 2],
        [3, 4],
        [5, 6]
    ]
]));