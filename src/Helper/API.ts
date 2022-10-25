const baseUrl = "https://randomuser.me/api";

interface SearchUsersInterface {
    results: UserType[];
}

export const searchUsers = async (
    number_of_results: number
): Promise<SearchUsersInterface> => {
    const res = await fetch(baseUrl + `?results=${number_of_results}`);
    const json = await res.json();
    return json;
};
