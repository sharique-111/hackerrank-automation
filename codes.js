module.exports ={
    answers: [
        `#include <bits/stdc++.h>
        using namespace std;
        int main(){
            int n;
            cin>>n;
            vector<int> v(n);
            int sumArr=0;
            for(int i=0;i<n;i++)
            {
                cin>>v[i];
                sumArr+=v[i];
            }
            cout<<sumArr;
            return 0;
        }
        `,
        `#include <bits/stdc++.h>
        using namespace std;
        int main(){
            int n;
            cin>>n;
            vector<int> v(n);
            long long int productArr=1;
            for(int i=0;i<n;i++)
            {
                cin>>v[i];
                productArr*=v[i];
            }
            cout<<productArr;
            return 0;
        }
        `
    ]
}