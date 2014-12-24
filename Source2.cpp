#include <iostream>

using namespace std; //New Space for whatever I wish to write.

int main(){ // just something small, as practice, I'm still quite new :p.
	while(true){
		int extern i, u;
		int ans = 0;
		std::cout << "Enter in numbers to be added together.\n0 to exit" << std::endl;
		std::cin >> i;
		ans += i;
		while (true){
			std::cin >> u;
			std::cout << "--sub-total--" << std::endl;
			ans += u;
			std::cout << ans << std::endl;
			if (u == 0){
				return 0;
			}
		}
	}
}