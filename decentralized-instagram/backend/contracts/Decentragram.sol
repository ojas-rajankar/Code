//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

contract Decentragram {
    string public name = "Decentragram";

    struct Image {
        uint256 id;
        string imgHash;
        string title;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    Image[] public images;
    uint256 internal index = 0;

    event ImageCreated(
        uint256 id,
        string imgHash,
        string title,
        string description,
        uint256 tipAmount,
        address payable author
    );

    event imageTipped(
        uint256 id,
        string imgHash,
        string title,
        string description,
        uint256 tipAmount,
        address payable author
    );

    function uploadImage(string memory _imgHash, string memory _title, string memory _description)
        public
    {
        require(bytes(_imgHash).length > 0, "Image Hash Can't Be Empty!");
        require(bytes(_description).length > 0, "Image Description Can't Be Empty!");
        images.push(Image(index, _imgHash, _title, _description, 0, payable(msg.sender)));
        index += 1;
        emit ImageCreated(index, _imgHash, _title, _description, 0, payable(msg.sender));
    }

    function tipImageOwner(uint256 _id) public payable {
        Image memory _image = images[_id];
        address payable _author = _image.author;
        _author.transfer(msg.value);
        _image.tipAmount += msg.value;
        emit imageTipped(
            _image.id,
            _image.imgHash,
            _image.title,
            _image.description,
            _image.tipAmount,
            _image.author
        );
    }

    function getUploadedImages() public view returns(Image[] memory) {
        return images;
    }
}
