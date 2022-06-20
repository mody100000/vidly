import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const paginated = _(items).splice(startIndex).take(pageSize).value();
  return paginated;
}
